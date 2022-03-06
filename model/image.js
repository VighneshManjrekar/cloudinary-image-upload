const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    asset_id: { type: String },
    public_id: { type: String },
    version_id: { type: String },
    width: { type: Number },
    height: { type: Number },
    created_at: { type: String },
    bytes: { type: Number },
    secure_url: { type: String }
});

module.exports = mongoose.model('Image', imageSchema);