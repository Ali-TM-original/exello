import {ID, storage} from '@/appwrite'

const uploadImage = async (file:File) => {
    if (!file) return;

    const FileUpload = await storage.createFile(
        process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
        ID.unique(),
        file
    );
    return FileUpload
}

export default uploadImage