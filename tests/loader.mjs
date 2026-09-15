import path from "node:path";
import fs from "node:fs";
import { pathToFileURL, fileURLToPath } from "node:url";

const projectRoot = process.cwd();

export async function resolve(specifier, context, nextResolve) {
  let target = specifier;

  // Handle ~/ alias to app/
  if (target.startsWith("~/")) {
    target = path.join(projectRoot, "app", target.slice(2));
  } else if (target.startsWith(".") && context.parentURL) {
    const parentDir = path.dirname(fileURLToPath(context.parentURL));
    target = path.resolve(parentDir, target);
  }

  if (path.isAbsolute(target)) {
    const candidates = [
      target,
      target + ".ts",
      target + ".tsx",
      target + ".js",
      path.join(target, "index.ts"),
      path.join(target, "index.js"),
    ];

    for (const cand of candidates) {
      if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
        return {
          url: pathToFileURL(cand).href,
          shortCircuit: true,
        };
      }
    }
  }

  return nextResolve(specifier, context);
}
