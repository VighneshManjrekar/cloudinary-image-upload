const path = require('path')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')
const Image = require('../model/image')

exports.getRoot = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
}

exports.postImage = (req, res) => {
    const form = formidable()
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err)
            return res.status(500).json('Form error')
        }
        try {
            // in folder path we can set folder name
            const imageData = await cloudinary.uploader.upload(files.file.filepath, { folder: 'apiImages' })
            const image = new Image({
                asset_id: imageData.asset_id,
                public_id: imageData.public_id,
                version_id: imageData.version_id,
                width: imageData.width,
                height: imageData.height,
                created_at: imageData.created_at,
                bytes: imageData.bytes,
                secure_url: imageData.secure_url,

            })
            await image.save()
            return res.status(200).json(imageData)
        } catch (err) {
            console.log(err)
            return res.status(500).json('upload error')
        }
    })
}