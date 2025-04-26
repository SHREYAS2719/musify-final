document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".main-content section");
    const menuItems = document.querySelectorAll(".sidebar ul li a");
    
    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove("active");
        });
        document.querySelector(id).classList.add("active");
    }
    
    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href");
            showSection(sectionId);
    
            // Load data based on section
            if (sectionId === "#security") fetchSecurityInfo();
            if (sectionId === "#reports") fetchReports();
            if (sectionId === "#users") fetchUsers();
        });
    });
    
    
    showSection("#users");

    // Fake Analytics Data
    const analyticsData = {
        totalListeners: Math.floor(Math.random() * 50000) + 10000,
        activeUsers: Math.floor(Math.random() * 10000) + 5000,
        trendingSongs: [
            { title: "Song A", plays: Math.floor(Math.random() * 5000) },
            { title: "Song B", plays: Math.floor(Math.random() * 5000) },
            { title: "Song C", plays: Math.floor(Math.random() * 5000) }
        ],
        userGrowth: Array.from({ length: 12 }, () => Math.floor(Math.random() * 2000) + 500)
    };

    // Update Stats
    document.getElementById("totalListeners").innerText = analyticsData.totalListeners;
    document.getElementById("activeUsers").innerText = analyticsData.activeUsers;
    document.getElementById("engagementRate").innerText = ((analyticsData.activeUsers / analyticsData.totalListeners) * 100).toFixed(2) + "%";

    // Trending Songs List
    const trendingList = document.getElementById("trendingSongs");
    analyticsData.trendingSongs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = `${song.title} - ${song.plays} plays`;
        trendingList.appendChild(li);
    });

    // User Growth Chart
    new Chart(document.getElementById("userGrowthChart"), {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: 'Users per Month',
                data: analyticsData.userGrowth,
                borderColor: '#00ff99',
                fill: true,
                backgroundColor: 'rgba(0, 255, 153, 0.2)'
            }]
        }
    });
});


function generateAnalytics() {
    const totalListeners = Math.floor(Math.random() * 50000) + 10000;
    const activeUsers = Math.floor(Math.random() * 10000) + 5000;
    const totalPlaysToday = Math.floor(Math.random() * 100000) + 10000;
    const genreList = ["Pop", "Hip Hop", "EDM", "Rock", "Classical", "Jazz"];
    const mostPlayedGenre = genreList[Math.floor(Math.random() * genreList.length)];

    document.getElementById("totalListeners").innerText = totalListeners;
    document.getElementById("activeUsers").innerText = activeUsers;
    document.getElementById("engagementRate").innerText =
        ((activeUsers / totalListeners) * 100).toFixed(2) + "%";

    // Extra Stats
    document.getElementById("totalPlays").innerText = totalPlaysToday;
    document.getElementById("topGenre").innerText = mostPlayedGenre;

    // Update chart with new user growth
    const growthChart = Chart.getChart("userGrowthChart");
    if (growthChart) {
        growthChart.data.datasets[0].data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 2000) + 500);
        growthChart.update();
    }
}

// Real-time Active User Count Simulation
function simulateLiveActiveUsers() {
    setInterval(() => {
        const fluctuation = Math.floor(Math.random() * 200 - 100); // +/- 100
        let current = parseInt(document.getElementById("activeUsers").innerText);
        current = Math.max(0, current + fluctuation);
        document.getElementById("activeUsers").innerText = current;
    }, 5000); // Every 5 seconds
}

// Initial call and real-time setup
document.addEventListener("DOMContentLoaded", () => {
    generateAnalytics();
    simulateLiveActiveUsers();
});













function saveSettings() {
    const settings = {
        siteName: document.getElementById("siteName").value,
        theme: document.getElementById("theme").value,
        maintenanceMode: document.getElementById("maintenanceMode").value,
        maxUsers: document.getElementById("maxUsers").value,
        streamQuality: document.getElementById("streamQuality").value,
        adsEnabled: document.getElementById("adsEnabled").value,
        userRoles: document.getElementById("userRoles").value,
        maxUpload: document.getElementById("maxUpload").value,
        enableReports: document.getElementById("enableReports").value,
        enable2FA: document.getElementById("enable2FA").value,
        sessionTimeout: document.getElementById("sessionTimeout").value,
        loginAlert: document.getElementById("loginAlert").value,
        premiumEnabled: document.getElementById("premiumEnabled").value,
        defaultPlan: document.getElementById("defaultPlan").value,
        revenueShare: document.getElementById("revenueShare").value
    };

    console.log("Settings Saved:", settings);

    alert("✅ Settings Saved Successfully!\n\n" +
        `Platform: ${settings.siteName}\nTheme: ${settings.theme}\nMaintenance: ${settings.maintenanceMode}\n` +
        `Max Users: ${settings.maxUsers}\nStream Quality: ${settings.streamQuality}\nAds: ${settings.adsEnabled}\n` +
        `User Role: ${settings.userRoles}\nUpload Limit: ${settings.maxUpload}MB\nReports: ${settings.enableReports}\n` +
        `2FA: ${settings.enable2FA}\nTimeout: ${settings.sessionTimeout}min\nLogin Alerts: ${settings.loginAlert}\n` +
        `Premium: ${settings.premiumEnabled}\nPlan: ${settings.defaultPlan}\nRevenue Share: ${settings.revenueShare}%`);
}





// function fetchUsers() {
//     const fakeUsers = [
//         { id: 1, name: "Alice Johnson", role: "Admin" },
//         { id: 2, name: "Bob Smith", role: "User" },
//         { id: 3, name: "Carol White", role: "Moderator" },
//         { id: 4, name: "David Lee", role: "Editor" },
//         { id: 5, name: "Eva Green", role: "User" }
//     ];

//     const userTable = document.getElementById("userTable");

//     // Clear existing rows except header
//     userTable.innerHTML = `
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Actions</th>
//         </tr>
//     `;

//     fakeUsers.forEach(user => {
//         const row = userTable.insertRow();
//         row.innerHTML = `
//             <td>${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.role}</td>
//             <td><button onclick="alert('Edit ${user.name}')">Edit</button></td>
//         `;
//     });
// }


let users = [
    { id: 1, name: "shreyas satam", role: "Admin" },
    { id: 2, name: "kantilal solanki", role: "Admin" },
    { id: 3, name: "keval nandaniya", role: "Moderator" },
    { id: 4, name: "yash mavaliya", role: "Editor" },
    { id: 5, name: "ashish kapadia", role: "User" }
];

function fetchUsers() {
    const userTable = document.getElementById("userTable");

    userTable.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
        </tr>
    `;

    users.forEach(user => {
        const row = userTable.insertRow();
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="openEditModal(${user.id})">Edit</button>
            </td>
        `;
    });
}

function addUser() {
    const name = document.getElementById("newUserName").value.trim();
    const role = document.getElementById("newUserRole").value;

    if (!name) return alert("Name is required");

    const newUser = {
        id: users.length + 1,
        name,
        role
    };

    users.push(newUser);
    fetchUsers();

    // Clear form
    document.getElementById("newUserName").value = "";
    document.getElementById("newUserRole").value = "User";
}

function openEditModal(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    document.getElementById("editUserId").value = user.id;
    document.getElementById("editUserName").value = user.name;
    document.getElementById("editUserRole").value = user.role;

    document.getElementById("editModal").style.display = "block";
}

function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
}

function saveUserEdit() {
    const id = parseInt(document.getElementById("editUserId").value);
    const name = document.getElementById("editUserName").value.trim();
    const role = document.getElementById("editUserRole").value;

    if (!name) return alert("Name is required");

    const user = users.find(u => u.id === id);
    if (!user) return;

    user.name = name;
    user.role = role;

    fetchUsers();
    closeEditModal();
}




function fetchReports() {
    const reportList = document.getElementById("reportList");
    reportList.innerHTML = ""; // Clear previous reports

    const fakeReports = [
        {
            id: 1,
            user: "ashish kapadia",
            issue: "Inappropriate song lyrics",
            date: "2025-04-10",
            status: "Pending"
        },
        {
            id: 2,
            user: "keval nandaniya",
            issue: "Playback not working",
            date: "2025-04-12",
            status: "Resolved"
        },
        {
            id: 3,
            user: "anonymous",
            issue: "Ad volume too loud",
            date: "2025-04-13",
            status: "Investigating"
        }
    ];

    fakeReports.forEach(report => {
        const reportCard = document.createElement("div");
        reportCard.style.background = "#1e1e1e";
        reportCard.style.border = "1px solid #333";
        reportCard.style.padding = "10px";
        reportCard.style.marginBottom = "10px";
        reportCard.style.borderRadius = "8px";

        reportCard.innerHTML = `
            <strong>Report ID:</strong> ${report.id}<br>
            <strong>User:</strong> ${report.user}<br>
            <strong>Issue:</strong> ${report.issue}<br>
            <strong>Date:</strong> ${report.date}<br>
            <strong>Status:</strong> ${report.status}
        `;

        reportList.appendChild(reportCard);
    });
}

function fetchSecurityInfo() {
    const securitySection = document.getElementById("security");
    
    const fakeSecurityData = {
        twoFAEnabled: true,
        bannedUsers: ["toxic_user01", "spammer88"],
        failedLoginAttempts: 14,
        lastSecurityAudit: "2025-03-29"
    };

    const container = document.createElement("div");
    container.style.background = "#1e1e1e";
    container.style.padding = "15px";
    container.style.marginTop = "15px";
    container.style.borderRadius = "8px";
    container.style.border = "1px solid #333";

    container.innerHTML = `
        <p><strong>Two-Factor Authentication Enabled:</strong> ${fakeSecurityData.twoFAEnabled ? "Yes ✅" : "No ❌"}</p>
        <p><strong>Banned Users:</strong> ${fakeSecurityData.bannedUsers.join(", ") || "None"}</p>
        <p><strong>Failed Login Attempts (Last 24h):</strong> ${fakeSecurityData.failedLoginAttempts}</p>
        <p><strong>Last Security Audit:</strong> ${fakeSecurityData.lastSecurityAudit}</p>
    `;

    // Clear previous info and append the new
    securitySection.innerHTML += container.outerHTML;
}





let liveChart;
let playData = [];
let playLabels = [];

function initLiveChart() {
    const ctx = document.getElementById("livePlaysChart").getContext("2d");

    playData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    playLabels = Array.from({ length: 10 }, (_, i) => `${new Date().toLocaleTimeString().slice(0, 5)}`);

    liveChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: playLabels,
            datasets: [{
                label: 'Songs Played / Min',
                data: playData,
                borderColor: '#00bcd4',
                backgroundColor: 'rgba(0, 188, 212, 0.2)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            animation: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    updateLiveChart();
}

function updateLiveChart() {
    setInterval(() => {
        const newPlays = Math.floor(Math.random() * 100);
        const now = new Date().toLocaleTimeString().slice(0, 5);

        playData.push(newPlays);
        playLabels.push(now);

        if (playData.length > 10) {
            playData.shift();
            playLabels.shift();
        }

        liveChart.data.labels = playLabels;
        liveChart.data.datasets[0].data = playData;
        liveChart.update();
    }, 6000); // every 6 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    generateAnalytics();
    simulateLiveActiveUsers();
    initLiveChart();
});




function exportCSV(data, filename) {
    const headers = Object.keys(data[0]);
    const rows = data.map(row => headers.map(field => JSON.stringify(row[field] ?? "")).join(","));
    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
function exportUsersCSV() {
    exportCSV(users, "user_list.csv");
}
const fakeReports = [
    { id: 1, user: "ashish kapadia", issue: "Inappropriate song lyrics", date: "2025-04-10", status: "Pending" },
    { id: 2, user: "keval nandaniya", issue: "Playback not working", date: "2025-04-12", status: "Resolved" },
    { id: 3, user: "anonymous", issue: "Ad volume too loud", date: "2025-04-13", status: "Investigating" }
];
function exportReportsCSV() {
    exportCSV(fakeReports, "reports.csv");
}
