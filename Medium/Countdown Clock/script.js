const $ = document;
const date = new Date();
const finalDate = new Date("2022/12/30");

let dayBox = $.getElementsByClassName("day")[0];
let hourBox = $.getElementsByClassName("hour")[0];
let minBox = $.getElementsByClassName("min")[0];
let secBox = $.getElementsByClassName("sec")[0];

let m_day = 0,
  m_hour = 0,
  m_min = 0,
  m_sec = 0;

// initialize first
window.onload = () => {
  getDateData();
  showResult();
  setFormat();
};

// calculate day, hour, min and sec of left time
const getDateData = () => {
  let leftTime = Math.floor((finalDate.getTime() - date.getTime()) / 1000);

  m_day = Math.floor(leftTime / 86400);
  m_hour = Math.floor((leftTime - 86400 * m_day) / 3600);
  m_min = Math.floor((leftTime - (86400 * m_day + 3600 * m_hour)) / 60);
  m_sec = leftTime - (86400 * m_day + 3600 * m_hour + 60 * m_min);
};

// reset all variables
const reset = () => {
  m_day = 0;
  m_hour = 0;
  m_min = 0;
  m_sec = 0;
};

// correct format of numbers
const setFormat = () => {
  if (dayBox.innerText.length == 1) {
    dayBox.innerText = "0" + dayBox.innerText;
  }
  if (hourBox.innerText.length == 1) {
    hourBox.innerText = "0" + hourBox.innerText;
  }
  if (minBox.innerText.length == 1) {
    minBox.innerText = "0" + minBox.innerText;
  }
  if (secBox.innerText.length == 1) {
    secBox.innerText = "0" + secBox.innerText;
  }
};

// set result in boxes
const showResult = () => {
  dayBox.innerText = m_day;
  hourBox.innerText = m_hour;
  minBox.innerText = m_min;
  secBox.innerText = m_sec;
};

// logic of day
const reduceDay = () => {
  if (m_day != 0) {
    m_day--;
  } else {
    reset();
    clearInterval(intel);
  }
};

// logic of hour
const reduceHour = () => {
  if (m_hour != 0) {
    m_hour--;
  } else {
    m_hour = 23;
    reduceDay();
  }
};

// logic of min
const reduceMin = () => {
  if (m_min != 0) {
    m_min--;
  } else {
    m_min = 59;
    reduceHour();
  }
};

// logic of sec
const main = () => {
  if (m_sec > 0) {
    m_sec--;
  } else {
    m_sec = 59;
    reduceMin();
  }
  showResult();
  setFormat();
};

const intel = setInterval(main, 1000);
