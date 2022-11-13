const resizeImageFile = (file, width, height) => {
  return new Promise((res, rej) => {
    if (file.type.match(/image.*/)) {
      let reader = new FileReader();
      reader.onload = (data) => {
        let image = new Image();
        image.onload = () => {
          let canvas = document.createElement('canvas')
          canvas.width = width;
          canvas.height = height;
          canvas.getContext('2d').drawImage(image, 0, 0, width, height);
          canvas.toBlob(resizedImage => {
            console.log(resizedImage)
            res(resizedImage)
          })
        }
        image.src = data.target.result;
      }
      reader.readAsDataURL(file);
    } else {
      rej("it's not an image")
    }
  })
}

const resizedImageURL = (url, width, height) => {
  return new Promise((res, rej) => {
    let image = new Image();
    image.onload = () => {
      let canvas = document.createElement('canvas')
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(image, 0, 0, width, height);
      canvas.toBlob(resizedImage => {
        res(resizedImage)
      })
    }
    image.src = url;
  })
}

export {
  resizeImageFile,
  resizedImageURL
}