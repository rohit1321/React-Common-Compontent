import FileUpload from "../../../utils/components/common/upload";



export default function button() {
    return (
        <>
            <FileUpload
                buttonText="Choose file"
                dropZoneText="Drag and Drop a file"
                acceptedFileTypes="image/jpeg, image/png, .txt" />
        </>
    );
}