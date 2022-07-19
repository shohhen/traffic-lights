const trafficLights = () => {
  let red = document.querySelector(".red")
  let yellow = document.querySelector(".yellow")
  let green = document.querySelector(".green")

  const redLight = () => {
    red.style.opacity = 1;
    green.style.opacity = 0.3;
    yellow.style.opacity = 0.3;
  }

  const yellowToGreen = () => {
    red.style.opacity = 1;
    yellow.style.opacity = 1;
    green.style.opacity = 0.3;
  }

  const greenLight = () => {
    yellow.style.opacity = 0.3;
    red.style.opacity = 0.3;
    green.style.opacity = 1;
  };

  const yellowLight = () => {
    red.style.opacity = 0.3;
    green.style.opacity = 0.3;
    yellow.style.opacity = 1;
  }


  setTimeout(() => {
    redLight()
  })
  
  setTimeout(() => {
    yellowToGreen();
  }, 2000);

  setTimeout(() => {
    greenLight();
  }, 4000);

  setTimeout(() => {
    yellowLight();
  }, 6000);
}

const timer = setInterval(() => {
  trafficLights();
}, 8000);

trafficLights()