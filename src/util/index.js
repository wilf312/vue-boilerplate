import path from 'path'

// コンポーネントの名前を取得 ( __fileNameが渡される想定 )
export function getFileName(fileName) {
    const baseName = path.basename(fileName)
    const extName = path.extname(fileName)

    return baseName.replace(extName, '')
}
