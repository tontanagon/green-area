const apikey = "ee47638ad2a5ae6362d146cd3c28988a";
const provinces = {
    "Northern": [
        { name: "เชียงใหม่", lat: 18.7872, lon: 98.9936 },
        { name: "เชียงราย", lat: 19.9126, lon: 99.8310 },
        { name: "ลำพูน", lat: 18.5771, lon: 99.0566 },
        { name: "ลำปาง", lat: 18.2905, lon: 99.5072 },
        { name: "พะเยา", lat: 19.1617, lon: 99.8473 },
        { name: "แพร่", lat: 18.1514, lon: 99.1930 },
        { name: "น่าน", lat: 18.7837, lon: 100.7760 },
        { name: "อุตรดิตถ์", lat: 17.6170, lon: 100.0026 },
        { name: "แม่ฮ่องสอน", lat: 19.3010, lon: 97.9792 }
    ],
    "Northeastern": [
        { name: "ขอนแก่น", lat: 16.4316, lon: 102.8350 },
        { name: "อุดรธานี", lat: 17.4194, lon: 102.7850 },
        { name: "นครราชสีมา", lat: 14.9716, lon: 102.0950 },
        { name: "สุรินทร์", lat: 14.8790, lon: 103.4896 },
        { name: "บุรีรัมย์", lat: 14.9796, lon: 103.1028 },
        { name: "ร้อยเอ็ด", lat: 15.8797, lon: 103.6460 },
        { name: "อำนาจเจริญ", lat: 15.8610, lon: 104.6442 },
        { name: "เลย", lat: 17.4900, lon: 101.7333 },
        { name: "สกลนคร", lat: 17.1600, lon: 104.1421 },
        { name: "นครพนม", lat: 17.4130, lon: 104.6291 },
        { name: "มุกดาหาร", lat: 16.5494, lon: 105.7921 },
        { name: "กาฬสินธุ์", lat: 16.4292, lon: 103.4930 },
        { name: "หนองบัวลำภู", lat: 17.1965, lon: 102.4285 },
        { name: "บึงกาฬ", lat: 18.2892, lon: 103.2605 },
        { name: "ศรีสะเกษ", lat: 15.1062, lon: 104.3254 },
        { name: "ชัยภูมิ", lat: 15.8000, lon: 102.0333 },
        { name: "ยโสธร", lat: 15.7912, lon: 104.1492 }
    ],
    "Central": [
        { name: "นนทบุรี", lat: 13.8716, lon: 100.5148 },
        { name: "สมุทรปราการ", lat: 13.5931, lon: 100.6011 },
        { name: "พระนครศรีอยุธยา", lat: 14.3530, lon: 100.5682 },
        { name: "นครปฐม", lat: 13.8192, lon: 100.1016 },
        { name: "ปทุมธานี", lat: 14.0045, lon: 100.5085 },
        { name: "สมุทรสงคราม", lat: 13.4104, lon: 99.9575 },
        { name: "สมุทรสาคร", lat: 13.5707, lon: 100.2683 },
        { name: "นครนายก", lat: 14.0644, lon: 101.2344 },
        { name: "สระบุรี", lat: 14.5291, lon: 100.9025 },
        { name: "ลพบุรี", lat: 14.8025, lon: 100.6509 },
        { name: "สิงห์บุรี", lat: 14.8733, lon: 100.3920 },
        { name: "อ่างทอง", lat: 14.5889, lon: 100.4500 },
        { name: "ชัยนาท", lat: 14.1945, lon: 100.1369 },
        { name: "ประจวบคีรีขันธ์", lat: 11.7953, lon: 99.8015 },
        { name: "เพชรบุรี", lat: 12.9597, lon: 99.9575 },
        { name: "ราชบุรี", lat: 13.5433, lon: 99.8167 },
        { name: "กรุงเทพมหานคร", lat: 13.7563, lon: 100.5018 },
        { name: "สุพรรณบุรี", lat: 14.4441, lon: 100.1485 },
        { name: "กำแพงเพชร", lat: 16.4829, lon: 99.5227 },
        { name: "พิจิตร", lat: 16.4363, lon: 100.3631 },
        { name: "เพชรบูรณ์", lat: 16.4202, lon: 101.1219 },
        { name: "อุทัยธานี", lat: 15.3712, lon: 100.1257 }
    ],
    "Eastern": [
        { name: "ชลบุรี", lat: 13.3600, lon: 100.9867 },
        { name: "ระยอง", lat: 12.6802, lon: 101.2705 },
        { name: "จันทบุรี", lat: 12.6069, lon: 102.1050 },
        { name: "ตราด", lat: 12.5224, lon: 102.5143 },
        { name: "ฉะเชิงเทรา", lat: 13.7060, lon: 101.0827 },
        { name: "ปราจีนบุรี", lat: 13.5401, lon: 101.3917 },
        { name: "สระแก้ว", lat: 13.8000, lon: 102.0719 }
    ],
    "Southern": [
        { name: "ภูเก็ต", lat: 7.8804, lon: 98.3923 },
        { name: "กระบี่", lat: 8.0863, lon: 98.9063 },
        { name: "พังงา", lat: 8.4291, lon: 98.5967 },
        { name: "สงขลา", lat: 7.1847, lon: 100.5975 },
        { name: "สตูล", lat: 7.5075, lon: 99.8665 },
        { name: "นราธิวาส", lat: 6.4301, lon: 101.7461 },
        { name: "ปัตตานี", lat: 6.8717, lon: 98.1137 },
        { name: "ยะลา", lat: 6.5433, lon: 101.2534 },
        { name: "ชุมพร", lat: 10.4986, lon: 99.1737 },
        { name: "สุราษฎร์ธานี", lat: 9.1450, lon: 99.3335 },
        { name: "ระนอง", lat: 9.2100, lon: 98.6354 },
        { name: "ตรัง", lat: 7.5574, lon: 99.6064 },
        { name: "นครศรีธรรมราช", lat: 8.4419, lon: 99.9605 },
        { name: "พัทลุง", lat: 7.6176, lon: 100.0809 }
    ],
    "Western": [
        { name: "กาญจนบุรี", lat: 14.0071, lon: 99.5014 },
        { name: "ราชบุรี", lat: 13.5433, lon: 99.8167 },
        { name: "เพชรบุรี", lat: 12.9597, lon: 99.9575 },
        { name: "ประจวบคีรีขันธ์", lat: 11.7953, lon: 99.8015 },
        { name: "ตาก", lat: 16.8795, lon: 98.6794 }
    ]
};
// ฟังก์ชันสำหรับดึงตำแหน่ง
function getLocation() {
  const x = document.getElementById("location");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCurrentWeather);
    navigator.geolocation.getCurrentPosition(getDayWeather);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();
function translated(description) {
    let translatedDescription, iconpath; 
    if (description === "clear sky") {
        translatedDescription = "ท้องฟ้าแจ่มใส";
        iconpath = "/img/clear_sky.png";
    } else if (description === "few clouds") {
        translatedDescription = "มีเมฆบางส่วน";
        iconpath = "/img/few_clouds.png";
    } else if (description === "scattered clouds"){
        translatedDescription = "มีเมฆบางส่วน"
        iconpath = "/img/few_clouds.png";
    } else if (description === "overcast clouds") {
        translatedDescription = "เมฆครึ้ม";
        iconpath = "/img/cloud.png";
    } else if (description === "broken clouds") {
        translatedDescription = "เมฆครึ้ม";
        iconpath = "/img/cloud.png";
    } else if (description === "drizzle") {
        translatedDescription = "ฝนปรอยๆ";
        iconpath = "/img/drizzle.png";
    } else if (description === "rain") {
        translatedDescription = "ฝนตก";
        iconpath = "/img/rain.png";
    } else if (description === "shower rain") {
        translatedDescription = "ฝนตกหนักเป็นช่วงๆ";
        iconpath = "/img/shower_rain.png";
    } else if (description === "thunderstorm") {
        translatedDescription = "พายุฝนฟ้าคะนอง";
        iconpath = "/img/storm.png";
    } else if (description === "snow") {
        translatedDescription = "หิมะตก";
        iconpath = "/img/snowy.png";
    } else if (description === "mist") {
        translatedDescription = "หมอก";
        iconpath = "/img/foog.png";
    } else {
        translatedDescription = "ไม่ทราบสภาพอากาศ"; 
        iconpath = "/img/default.png"; 
    }

    return { translatedDescription, iconpath }; 
}

// ฟังก์ชันสำหรับดึงข้อมูลพยากรณ์อากาศ
function getCurrentWeather(position) {
    // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherElement = document.getElementById("showcurrentweather");
      if (weatherElement) {
        const description = data.weather[0].description;
        const { translatedDescription, iconpath } = translated(description);
        const temperature = Math.round(data.main.temp);
        weatherElement.innerHTML = `
            <img src="${iconpath}" class="card-img" alt="${translatedDescription}" style="max-width: 150px;">  
            <h2>${data.name}</h2>
            <h3>${temperature}°C</h3>
            <p>${translatedDescription}</p>
        `;
      }
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function getDayWeather(position) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherElement = document.getElementById("show5dayweather");
            if (weatherElement) {
                // เริ่มต้นตัวแปรที่ใช้เก็บ HTML
                let htmlContent = '';

                // แยกข้อมูลตามวันที่ (วันที่จาก dt_txt)
                const groupedByDate = {};

                // วันของสัปดาห์ (ใช้สำหรับแสดงแทนวันที่)
                const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

                // วนลูปผ่านข้อมูลทั้งหมดใน data.list
                for (let i = 0; i < data.list.length; i++) {
                    const weather = data.list[i].weather[0];
                    const description = weather.description;
                    const wind = data.list[i].wind.speed;
                    const clouds = data.list[i].clouds.all;
                    const { translatedDescription, iconpath } = translated(description);
                    const temperature = Math.round(data.list[i].main.temp);

                    // แยกวันที่และเวลา
                    const dateTime = data.list[i].dt_txt.split(' ');
                    const date = dateTime[0];  // วันที่ (2024-12-21)
                    const time = dateTime[1];  // เวลา (06:00:00)

                    // คำนวณวันที่และวันในสัปดาห์
                    const dateObj = new Date(date);
                    const dayOfWeek = weekdays[dateObj.getDay()];  // วันในสัปดาห์ เช่น Sun, Mon

                    // กำหนด "Today" สำหรับวันที่ปัจจุบัน
                    const today = new Date().toISOString().split('T')[0];  // วันที่ปัจจุบัน
                    const displayDate = (date === today) ? "Today" : dayOfWeek;

                    // สร้างกลุ่มข้อมูลตามวันที่
                    if (!groupedByDate[date]) {
                        groupedByDate[date] = [];
                    }
                    groupedByDate[date].push({
                        day: displayDate,
                        time: time,
                        temperature: temperature,
                        wind: wind,
                        clouds: clouds,
                        description: translatedDescription,
                        iconpath: iconpath
                    });
                }

                // สร้างตารางแยกสำหรับแต่ละวัน
                for (const date in groupedByDate) {
                    // เพิ่มชื่อวันในตาราง
                    htmlContent += `<h3>${groupedByDate[date][0].day}</h3>`;
                    htmlContent += `
                        <table>
                            <thead>
                                <tr>
                                    <th>เวลา</th>
                                    <th>อุณหภูมิ (°C)</th>
                                    <th>ความเร็วลม (m/s)</th>
                                    <th>เมฆ(%)</th>
                                    <th>สภาพอากาศ</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;
                    
                    // วนลูปผ่านข้อมูลแต่ละช่วงเวลาที่กลุ่มตามวันที่
                    groupedByDate[date].forEach((item) => {
                        htmlContent += `
                            <tr>
                                <td>${item.time}</td>
                                <td>${item.temperature}</td>
                                <td>${item.wind}</td>
                                <td>${item.clouds}</td>
                                <td><img src="${item.iconpath}" class="card-img" alt="${item.translatedDescription}"style="max-width: 50px;"></td>       
                            </tr>
                        `;
                    });

                    // ปิดตาราง
                    htmlContent += `
                            </tbody>
                        </table>
                    `;
                }

                // แสดงผลใน HTML
                weatherElement.innerHTML = htmlContent;
            }
        })
        .catch((error) => console.error("Error fetching weather data:", error));
}

function populateDates() {
    const dateSelect = document.getElementById('date');
    const today = new Date();

    for (let i = 0; i < 5; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);

        const dateStr = futureDate.toISOString().split('T')[0];
        const option = document.createElement('option');
        option.value = dateStr;
        option.textContent = i === 0 ? `Today (${dateStr})` : dateStr;
        dateSelect.appendChild(option);
    }
}

// ฟังก์ชันที่ใช้กรองจังหวัดตามภูมิภาค
function updateProvinces() {
    const regionSelect = document.getElementById("region");
    const provinceSelect = document.getElementById("province");
    
    const region = regionSelect.value;

    // ล้างตัวเลือกเดิมใน dropdown
    provinceSelect.innerHTML = "";

    // เพิ่ม option ตัวแรก "เลือกจังหวัด"
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "เลือกจังหวัด";
    provinceSelect.appendChild(defaultOption);
    // เพิ่มจังหวัดตามภูมิภาคที่เลือก
    if (provinces[region]) {
        provinces[region].forEach(function(province) {
            const option = document.createElement("option");
            option.value = province.name;
            option.textContent = province.name;
            provinceSelect.appendChild(option);
        });
    }
}

async function fetchWeatherData() {
    // แสดงสถานะ Loading
    document.getElementById('loading').style.display = 'block';

    const provinceName = document.getElementById('province').value;
    const region = document.getElementById('region').value;

    const selectedProvince = provinces[region].find(province => province.name === provinceName);
    const selectedCoordinates = { lat: selectedProvince.lat, lon: selectedProvince.lon };

    // หาจังหวัดใกล้เคียง 15 จังหวัด
    const closestProvinces = getClosestProvinces(selectedCoordinates, provinces);

    // ดึงข้อมูลสภาพอากาศสำหรับ 15 จังหวัดพร้อมกันโดยใช้ Promise.all
    const weatherPromises = closestProvinces.map(province => getWeatherData(province.lat, province.lon));

    try {
        const weatherDataArray = await Promise.all(weatherPromises);
        const results = [];
    
        // เก็บข้อมูลทั้งหมดโดยไม่กรอง
        weatherDataArray.forEach((weather, index) => {
            const province = closestProvinces[index];
            const distance = calculateDistance(selectedCoordinates, { lat: province.lat, lon: province.lon });
    
            results.push({
                province: province.name,
                temperature: weather.main.temp,
                windSpeed: weather.wind.speed,
                clouds: weather.clouds.all,
                distance: distance,
                // เพิ่มฟิลด์สำหรับการจัดลำดับ
                isTemperatureInRange: weather.main.temp >= 15 && weather.main.temp <= 25,
                isWindSpeedInRange: weather.wind.speed < 20,
                isCloudsInRange: weather.clouds.all < 50,
            });
        });
    
        // เรียงลำดับตามเงื่อนไข
        results.sort((a, b) => {
            // เรียงลำดับอุณหภูมิระหว่าง 15-25 ก่อน
            if (b.isTemperatureInRange !== a.isTemperatureInRange) {
                return b.isTemperatureInRange - a.isTemperatureInRange;
            }
            // ต่อด้วยความเร็วลมน้อยกว่า 20
            if (b.isWindSpeedInRange !== a.isWindSpeedInRange) {
                return b.isWindSpeedInRange - a.isWindSpeedInRange;
            }
            // ตามด้วยเมฆน้อยกว่า 50%
            if (b.isCloudsInRange !== a.isCloudsInRange) {
                return b.isCloudsInRange - a.isCloudsInRange;
            }
            // หากเงื่อนไขทั้งหมดเท่ากัน ให้เรียงตามระยะทาง
            return a.distance - b.distance;
        });
    
        // อัพเดตตารางผลลัพธ์
        updateTable(results);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

    // ซ่อนสถานะ Loading
    document.getElementById('loading').style.display = 'none';
}

// ฟังก์ชันหาจังหวัดใกล้เคียง 15 จังหวัด
function getClosestProvinces(selectedCoordinates, provinces) {
    const distances = [];

    // คำนวณระยะทางจากจังหวัดที่เลือกไปยังจังหวัดอื่นๆ
    for (const region in provinces) {
        for (const province of provinces[region]) {
            const coord = { lat: province.lat, lon: province.lon };
            const distance = calculateDistance(selectedCoordinates, coord);
            distances.push({ province, distance });
        }
    }

    // เรียงลำดับจังหวัดตามระยะทาง
    distances.sort((a, b) => a.distance - b.distance);


    // เลือก 15 จังหวัดที่ใกล้ที่สุด
    const closestProvinces = distances.map(item => item.province);
    return closestProvinces;
}

// ฟังก์ชันที่ใช้ดึงข้อมูลสภาพอากาศจาก OpenWeatherMap API
async function getWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// ฟังก์ชันคำนวณระยะทางระหว่าง 2 พิกัด (ใช้สูตร Haversine)
function calculateDistance(coord1, coord2) {
    const R = 6371; 
    const lat1 = coord1.lat * Math.PI / 180;
    const lon1 = coord1.lon * Math.PI / 180;
    const lat2 = coord2.lat * Math.PI / 180;
    const lon2 = coord2.lon * Math.PI / 180;

    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;

    const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; 
}

function updateTable(results) {
    const tbody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    results.forEach(result => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${result.province}</td>
            <td>${result.temperature.toFixed(1)}</td>
            <td>${result.windSpeed.toFixed(1)}</td>
            <td>${result.clouds}</td>
            <td>${result.distance.toFixed(1)}</td>
        `;

        tbody.appendChild(row);
    });
}

// เมื่อโหลดหน้าเว็บจะตั้งค่าภูมิภาคเริ่มต้น
window.onload = function() {
    updateProvinces(); // เรียกฟังก์ชันเพื่อโหลดจังหวัดที่เกี่ยวข้อง
    populateDates();
};