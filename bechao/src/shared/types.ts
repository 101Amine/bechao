export type PostMessage = {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: Number,
    createAt: Date,
}