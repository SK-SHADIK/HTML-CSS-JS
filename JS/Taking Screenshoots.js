const screenshootBtn = document.querySelector("#src-btn"),
screenshootPreview = document.querySelector(".src-preview"),
closeBtn = screenshootPreview.querySelector("#close-btn");

const captureScreen = async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });
        const video = document.createElement("video");
        
        video.addEventListener("loadedmetadata", () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            video.play(); 

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            stream.getVideoTracks()[0].stop();
            
            screenshootPreview.querySelector("img").src = canvas.toDataURL();
            screenshootPreview.classList.add("show");
        });

        video.srcObject = stream; 

    } catch (error) {
        alert("Failed To Take screenshoot!");
    }
}

closeBtn.addEventListener("click", () => screenshootPreview.classList.toggle("show"));
screenshootBtn.addEventListener("click", captureScreen);