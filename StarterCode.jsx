const captureImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return null;
    }

    const result = await ImagePicker.launchCameraAsync({
        aspect: [3, 4],
    });

    if (!result.cancelled) return result.uri
};

const captureFront = async () => {
    const imageUri = await captureImage();
    if (imageUri) setID_Front(imageUri);
};

const captureBack = async () => {
    const imageUri = await captureImage();
    if (imageUri) setID_Back(imageUri);
};
