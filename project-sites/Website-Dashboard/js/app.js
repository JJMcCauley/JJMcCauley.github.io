// Alert Banner

const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = 
`
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>2</strong> new notifications</p>
        <p class="alert-banner-close">x</p>
    </div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

// Traffic Chart

const trafficButtons = document.querySelectorAll('.traffic-nav-link');
const trafficList =  document.querySelector('.traffic-nav');

const getHourlyTrafficChart = () => {
    let trafficCanvas = document.getElementById('traffic-chart');

    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", 
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of hits over time period',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    };

    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
};

const getDailyTrafficChart = () => {
    let trafficCanvas = document.getElementById('traffic-chart');

    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    let trafficData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of hits over time period',
            data: [75000, 115000,175000, 125000, 225000, 200000, 100000],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    };

    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
};

const getWeeklyTrafficChart = () => {
    let trafficCanvas = document.getElementById('traffic-chart');

    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    let trafficData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: '# of hits over time period',
            data: [100000, 150000, 200000, 300000, 360000, 120000, 110000, 100000, 90000, 80000],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    };

    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
};

const getMonthlyTrafficChart = () => {
    let trafficCanvas = document.getElementById('traffic-chart');

    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    let trafficData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of hits over time period',
            data: [800000, 850000, 700000, 900000, 960000, 1200000, 1100000, 1000000, 900000, 800000, 850000, 950000],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    };

    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
};

const selectedTraffic = (index) => {
    element = trafficButtons[index];
    for (let i = 0; i < trafficButtons.length; i++) {
        if (trafficButtons[i].className == 'traffic-nav-link green-background') {
            trafficButtons[i].className = 'traffic-nav-link';
        }
    }
    element.classList.add('green-background');
    if (index === 0) {
        getHourlyTrafficChart();
    }
    else if (index === 1) {
        getDailyTrafficChart();
    }
    else if (index === 2) {
        getWeeklyTrafficChart();
    }
    else if (index === 3) {
        getMonthlyTrafficChart();
    }
};

trafficList.addEventListener('click', (e) => {
    if (e.target.className == 'traffic-nav-link')
    {
        let choice = e.target.textContent.toLowerCase();
        let choiceIndex = 0;
        if (choice == 'hourly') {
            choiceIndex = 0;
        }
        else if (choice == 'daily') {
            choiceIndex = 1;
        }
        else if (choice == 'weekly') {
            choiceIndex = 2;
        }
        else if (choice == 'monthly') {
            choiceIndex = 3;
        }
        selectedTraffic(choiceIndex);
    }
});

// Daily Traffic 

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115,175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Users

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8',
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Messaging

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', (e) => {
    if (user.value === '' && message.value === '') {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message succesfully sent to: ${user.value}`);
    }
    e.preventDefault();
});

let userNames = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
];

// Autocompete code adapted from https://www.w3schools.com/howto/howto_js_autocomplete.asp

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("userField"), userNames);
// notification bell

let readNotifications = 0;
let notifications = [
    `You have one new follower`,
    `Your Friend Rachel Hale sent you a message`
];
let unreadNotifications = notifications.length;
const notificationNumberDisplay = document.getElementById('notification-number');
const notificationBell = document.getElementById('notification-bell');
let hasClicked = false;

const displayNumberOfNotifications = () => {
    notificationNumberDisplay.textContent = unreadNotifications;
};

notificationBell.addEventListener('click', (e) => {
    if (hasClicked) {
        hasClicked = false;
        notificationBell.classList.remove('green-background');
        ulElement = document.getElementById('ul-notification');
        ulElement.remove();
        notificationNumberDisplay.parentElement.style.display = 'none';
        alertBanner.style.display = 'none';
    }
    else if (unreadNotifications > 0) {
        hasClicked = true;
        const ul = document.createElement('ul');
        ul.className = 'ul-notification';
        ul.id = 'ul-notification';
        notificationBell.classList.add('green-background');
        for (let i = 0; i < unreadNotifications; i++){
            const li = document.createElement('li');
            li.textContent = notifications[i];
            li.className = 'li-notification';
            li.id = 'li-notification';
            ul.appendChild(li);      
        }
        notifications = [];
        unreadNotifications = 0;
        notificationBell.insertAdjacentElement("afterend", ul);
    }
});

// Settings

const emailNotificationsInput = document.getElementById('email-notification-option');
let emailSettingValue = emailNotificationsInput.value;
const profileVisibilityInput = document.getElementById('profile-visibility-option');
let profileSettingsValue = profileVisibilityInput.value;
const timezoneInput = document.getElementById('timezone');
let timezoneValue = timezoneInput.value;

const profileVisibilityUpdate = () => {
    if (profileSettingsValue == 'on') {
        profileSettingsValue = 'off';
    }
    else {
        profileSettingsValue = 'on';
    }   
};

const emailOptionUpdate = () => {
    if (emailSettingValue == 'on') {
        emailSettingValue = 'off';
    }
    else {
        emailSettingValue = 'on';
    }
};

const updateTimezone = () => {
    timezoneValue = timezoneInput.value;
};

const saveSettings = () => {
    localStorage.setItem('emailSetting', emailSettingValue);
    localStorage.setItem('profileSetting', profileSettingsValue);
    localStorage.setItem('timezoneSetting', timezoneValue);
};

const loadSettings = () => {
    emailSettingValue = localStorage.getItem('emailSetting');
    if (emailSettingValue == 'on') {
        emailNotificationsInput.checked = true;
    }
    profileSettingsValue = localStorage.getItem('profileSetting');
    if (profileSettingsValue == 'on') {
        profileVisibilityInput.checked = true;
    }
    timezoneValue = localStorage.getItem('timezoneSetting');
    timezoneInput.value = timezoneValue;
    if (timezoneValue == 'Select a Timezone' || timezoneValue == null ) {
        timezoneInput.selectedIndex = 0;
    }

};

const resetSettings = () => {

    localStorage.clear();
    emailNotificationsInput.value = 'off';
    emailSettingValue = 'off';
    emailNotificationsInput.checked = false;

    profileVisibilityInput.value = 'off';
    profileSettingsValue = 'off';
    profileVisibilityInput.checked = false;

    timezoneInput.selectedIndex = 0;
    timezoneValue = timezoneInput.value;
};

