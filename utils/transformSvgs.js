const fs = require("fs");
const path = require("path");

const srcSvgDir = path.join(process.cwd(), "./components/Icons/svgs");
const outComponentFile = path.join(
  process.cwd(),
  "./components/Icons/MyIcons.tsx"
);
const componentTemplate = fs.readFileSync(
  path.join(process.cwd(), "./components/Icons/svgTemplateComponent.tsx"),
  "utf-8"
);
const exportTemplate = fs.readFileSync(
  path.join(process.cwd(), "./components/Icons/svgTemplateExport.tsx"),
  "utf-8"
);
const exportPlaceholder = "//SVGEXPORTPLACEHOLDER";
const svgNamePlaceholder = "SVGNAMEPLACEHOLDER";
const svgPlaceholder = "{/* SVGPLACEHOLDER */}";

function transformSvg(svg) {
  let content = svg;

  //Remove xmlns:xlinks ✔
  //Remove fills ✔
  //Remove gradients ✔ (Same as removing fills)
  //Resize to 100%? ✔
  //Use currentColor? ✔
  //Include {...rest} into svg tag? ✔

  // content = content.replace(/width="\d*"/, 'width="100%"');
  // content = content.replace(/height="\d*"/, 'height="100%"');
  content = content.replace(/<\?xml .*?>/, ""); //Remove <?xml> tag like <?xml version="1.0" encoding="UTF-8"?>
  content = content.replace(/xmlns:xlink=".*?"/g, ""); //Remove xlinks like xmlns:xlink="http://www.w3.org/1999/xlink"
  content = content.replace(/fill=".*?"/g, ""); //Assuming all tags without fill will use the parents color
  content = content.replace(/>/, ' fill="currentColor" >'); //Set svg tag fill to currentColor
  content = content.replace(/>/, " {...rest} >"); //Pass through properties from the component

  // console.log(content);

  return content;
}

function transformSrcSvgDir() {
  const filenames = fs.readdirSync(srcSvgDir);
  const names = filenames.map((filename) => filename.replace(/\..*$/, ""));
  console.log(names);

  const exports = filenames.map((filename, index) => {
    let svgPath = path.join(srcSvgDir, filename);

    if (!fs.existsSync(svgPath)) {
      console.log(
        "Error: %s does not exist in %s anymore. Exiting...",
        filename,
        srcSvgDir
      );
      return;
    }

    let originalSvg = fs.readFileSync(svgPath).toString("utf-8");
    let transformedSvg = transformSvg(originalSvg);

    let exported = exportTemplate.replace(
      `${svgNamePlaceholder}`,
      names[index]
    );
    exported = exported.replace(`${svgPlaceholder}`, transformedSvg);

    console.log("Transformed", filename, "into\n", exported);
    return exported;
  });

  const finalComponent = componentTemplate.replace(
    `${exportPlaceholder}`,
    exports.join("\n")
  );

  fs.writeFileSync(outComponentFile, finalComponent);
}

transformSrcSvgDir();
