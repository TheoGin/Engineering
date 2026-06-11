var loaderUtil = require("loader-utils");

function loader(buffer) { // 给的是buffer
    console.log("文件数据大小：(字节)", buffer.byteLength);
    var { limit = 1000, filename = "[contenthash].[ext]" } = loaderUtil.getOptions(this);
    if (buffer.byteLength >= limit) {
        var content = getFilePath.call(this, buffer, filename);
    } else {
        var content = getBase64(buffer);
    }
    return `module.exports = \`${ content }\``;
}

loader.raw = true; // 该loader要处理的是原始数据

module.exports = loader;

function getBase64(buffer) {
    return "data:image/png;base64," + buffer.toString("base64");
}

/**
 * 获取文件路径
 * @param buffer 源文件buffer
 * @param configFilename 如 "img-[contenthash:5].[ext]"
 * @returns {*} 文件路径
 */
function getFilePath(buffer, configFilename) {
    // 根据文件内容生成文件名
    var filename = loaderUtil.interpolateName(this, configFilename, {
        content: buffer,
    });
    console.log("filename: ", filename); // filename:  img-1dd36.png
    this.emitFile(filename, buffer); // img-1dd36.png  5.61 KiB          [emitted]
    return filename;
}