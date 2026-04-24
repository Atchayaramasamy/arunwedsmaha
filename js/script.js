/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

// ===== Configure your wedding details here (single place) =====
var WEDDING = {
    brideName: "Mahalakshmi",
    groomName: "Arun",
    weddingDateISO: "2026-05-18T06:00:00+05:30", // YYYY-MM-DDTHH:mm:ss+TZ
    weddingDateText: "Sunday, 18 May 2026",
    weddingTimeText: "6:00 AM – 7:30 AM",
    venueNameText: "Eshwari Mahal A/C, Thirumullaivoyal, Chennai",
    venueAddressText: "Eshwari Mahal A/C, Thirumullaivoyal, Chennai",
    venueMapUrl: "https://maps.google.com/", // replace with exact Google Maps link
    invitationLine: "Together with their families, Arun & Mahalakshmi invite you to join their wedding celebration.",
    familyLine: "With the blessings of our beloved parents and family, we request your gracious presence to celebrate this joyous occasion.",
    loveLine: "Two hearts, one journey, one beautiful beginning…",
    countdownTitle: "Counting days for our big moment",
    mapTitle: "Find Us Here",
    groomDetails: "K. Arun Kumar, B.Sc., MCA",
    brideDetails: "M. Mahalakshmi, MCA",
    rsvpText: "Kindly confirm your presence. We look forward to celebrating with you ❤️",
    footerWebsite: "www.ArunWedsMaha.in",
    invitationDownloadUrl: "./invitation/Sonali & Gagan.pdf",
    contactPhoneDisplay: "+91 90000 00000",
    contactPhoneE164: "+919000000000", // for WhatsApp/SMS link
    contactEmail: ""
};

var EVENTS = {
    wedding: {
        title: "Wedding (Muhurtham) - Arun & Mahalakshmi",
        startISO: "2026-05-18T06:00:00+05:30",
        endISO: "2026-05-18T07:30:00+05:30"
    },
    engagement: {
        title: "Engagement - Arun & Mahalakshmi",
        startISO: "2026-05-17T15:30:00+05:30",
        endISO: "2026-05-17T16:30:00+05:30"
    },
    reception: {
        title: "Reception - Arun & Mahalakshmi",
        startISO: "2026-05-17T18:30:00+05:30",
        endISO: "2026-05-17T21:30:00+05:30"
    },
    dinner: {
        title: "Dinner - Arun & Mahalakshmi",
        startISO: "2026-05-17T19:00:00+05:30",
        endISO: "2026-05-17T22:00:00+05:30"
    },
    breakfast: {
        title: "Breakfast - Arun & Mahalakshmi",
        startISO: "2026-05-18T07:30:00+05:30",
        endISO: "2026-05-18T09:00:00+05:30"
    }
};

var I18N = {
    en: {
        langToggle: "தமிழ்",
        heroQuoteShort: "Spare us a day of yours to make our day special",
        invitationSectionTitle: "Invitation",
        downloadInvitationBtn: "Download invitation",
        saveToCalendarBtn: "Save to calendar",
        mapSectionTitle: "Location",
        countdownTitle: "Counting days for our big moment",
        countdownNote: "We can’t wait to celebrate with you.",
        eventsTitle: "The celebrations",
        eventsSub: "A two-day gathering filled with love, laughter, and blessings.",
        day1Label: "Saturday",
        day2Label: "Sunday",
        evtEngagement: "Engagement",
        evtReception: "Reception",
        evtDinner: "Dinner",
        evtMuhurtham: "Muhurtham",
        evtBreakfast: "Breakfast",
        calMenuTitle: "Add to Calendar",
        calChooseEventLabel: "Choose event",
        calTip: "Tip: iPhone/Android users can open the .ics to add it to upcoming events.",
        addToCalendarBtn: "Add to calendar",
        rsvpBtn: "RSVP",
        viewVenueBtn: "View venue",
        familyTitle: "Family details",
        groomLabel: "Groom",
        brideLabel: "Bride",
        rsvpTitle: "RSVP"
    },
    ta: {
        langToggle: "English",
        heroQuoteShort: "எங்கள் வாழ்வின் இனிய நாளில் உங்கள் வருகையை அன்புடன் எதிர்பார்க்கிறோம்",
        invitationSectionTitle: "அழைப்பிதழ்",
        downloadInvitationBtn: "அழைப்பிதழை பதிவிறக்குக",
        saveToCalendarBtn: "நாட்காட்டியில் சேமிக்கவும்",
        mapSectionTitle: "இடம்",
        countdownTitle: "நிகழ்விற்கு இன்னும் மீதமுருப்பவை",
        countdownNote: "உங்களுடன் இந்த மகிழ்ச்சித் தருணத்தை கொண்டாட ஆவலாக இருக்கிறோம்.",
        eventsTitle: "விழா நிகழ்ச்சிகள்",
        eventsSub: "இரு நாட்கள் நடைபெறும் இந்நிகழ்வில் உங்கள் ஆசீர்வாதமும் பங்கேற்பும் வேண்டுகின்றோம்.",
        day1Label: "சனிக்கிழமை",
        day2Label: "ஞாயிற்றுக்கிழமை",
        evtEngagement: "நிச்சயதார்த்தம்",
        evtReception: "வரவேற்பு",
        evtDinner: "இரவு உணவு",
        evtMuhurtham: "முகூர்த்தம்",
        evtBreakfast: "காலை உணவு",
        calMenuTitle: "காலண்டரில் சேர்க்கவும்",
        calChooseEventLabel: "நிகழ்வைத் தேர்வு செய்யவும்",
        calTip: "குறிப்பு: iPhone/Android-ல் .ics கோப்பை திறந்து Upcoming Events-க்கு சேர்க்கலாம்.",
        addToCalendarBtn: "காலண்டரில் சேர்க்க",
        rsvpBtn: "RSVP",
        viewVenueBtn: "இடத்தைப் பார்க்க",
        familyTitle: "குடும்ப விவரங்கள்",
        groomLabel: "மணமகன்",
        brideLabel: "மணமகள்",
        rsvpTitle: "RSVP"
    }
};

var currentLang = "en";

function applyLanguage(lang) {
    currentLang = lang === "ta" ? "ta" : "en";
    var t = I18N[currentLang];
    setText("eventsTitle", t.eventsTitle);
    setText("eventsSub", t.eventsSub);
    setText("day1Label", t.day1Label);
    setText("day2Label", t.day2Label);
    setText("evtEngagement", t.evtEngagement);
    setText("evtReception", t.evtReception);
    setText("evtDinner", t.evtDinner);
    setText("evtMuhurtham", t.evtMuhurtham);
    setText("evtBreakfast", t.evtBreakfast);

    setText("countdownTitle", t.countdownTitle);
    setText("countdownNote", t.countdownNote);
    setText("heroQuoteText", t.heroQuoteShort);
    setText("invitationSectionTitle", t.invitationSectionTitle);
    setText("mapSectionTitle", t.mapSectionTitle);
    
    var downloadBtn = document.getElementById("downloadInvitationBtn");
    if (downloadBtn) {
        downloadBtn.textContent = t.downloadInvitationBtn;
        downloadBtn.setAttribute("href", currentLang === "ta" ? "./assets/img/arunmaha-tamil.png" : "./assets/img/arunmaha-english.png");
    }

    var calendarBtn = document.getElementById("saveToCalendarBtn");
    if (calendarBtn) calendarBtn.textContent = t.saveToCalendarBtn;

    var posterImg = document.getElementById("mainInvitationImg");
    if (posterImg) {
        posterImg.src = currentLang === "ta" ? "./assets/img/arunmaha-tamil.png" : "./assets/img/arunmaha-english.png";
    }

    setText("calMenuTitle", t.calMenuTitle);
    setText("calChooseEventLabel", t.calChooseEventLabel);
    setText("calTip", t.calTip);
    var addBtn = document.getElementById("addToCalendarBtn");
    if (addBtn) addBtn.textContent = t.addToCalendarBtn;
    
    // Family & Footer
    var familyTitle = document.querySelector("#family .sectionTitle");
    if (familyTitle) familyTitle.textContent = t.familyTitle;
    var cards = document.querySelectorAll("#family .card__title");
    if (cards.length >= 2) {
        cards[0].textContent = t.groomLabel;
        cards[1].textContent = t.brideLabel;
    }
    var rsvpTitle = document.querySelector("#rsvp .sectionTitle");
    if (rsvpTitle) rsvpTitle.textContent = t.rsvpTitle;

    var langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = t.langToggle;
    document.documentElement.setAttribute("lang", currentLang === "ta" ? "ta" : "en");
}

function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
}

function setHref(id, value) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("href", value);
}

function setDownloadLink(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    el.setAttribute("href", value);
    el.setAttribute("download", "Wedding Invitation");
}

function formatNumber(n) {
    return String(n).padStart(2, "0");
}

function formatUtcForCalendar(d) {
    // YYYYMMDDTHHMMSSZ
    var iso = d.toISOString();
    return iso.replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function buildIcsBlobUrl(evt) {
    var start = new Date(evt.startISO);
    var end = new Date(evt.endISO);
    var dtStart = formatUtcForCalendar(start);
    var dtEnd = formatUtcForCalendar(end);
    var stamp = formatUtcForCalendar(new Date());
    var uid = "arunwedsmaha-" + dtStart + "@local";

    var location = (WEDDING.venueNameText || "").replace(/\n/g, " ").trim();
    var description = [
        WEDDING.invitationLine,
        "",
        "Venue: " + (WEDDING.venueNameText || ""),
        WEDDING.venueMapUrl && WEDDING.venueMapUrl !== "https://maps.google.com/" ? ("Map: " + WEDDING.venueMapUrl) : ""
    ].filter(Boolean).join("\\n");

    var ics =
        "BEGIN:VCALENDAR\r\n" +
        "VERSION:2.0\r\n" +
        "PRODID:-//ArunWedsMaha//Invitation//EN\r\n" +
        "CALSCALE:GREGORIAN\r\n" +
        "METHOD:PUBLISH\r\n" +
        "BEGIN:VEVENT\r\n" +
        "UID:" + uid + "\r\n" +
        "DTSTAMP:" + stamp + "\r\n" +
        "DTSTART:" + dtStart + "\r\n" +
        "DTEND:" + dtEnd + "\r\n" +
        "SUMMARY:" + evt.title.replace(/\n/g, " ") + "\r\n" +
        "LOCATION:" + location + "\r\n" +
        "DESCRIPTION:" + description + "\r\n" +
        "END:VEVENT\r\n" +
        "END:VCALENDAR\r\n";

    var blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    return URL.createObjectURL(blob);
}

function buildGoogleCalendarUrl(evt) {
    var start = formatUtcForCalendar(new Date(evt.startISO));
    var end = formatUtcForCalendar(new Date(evt.endISO));
    var text = evt.title;
    var details = WEDDING.invitationLine + "\n\nVenue: " + (WEDDING.venueNameText || "") + (WEDDING.venueMapUrl ? ("\n" + WEDDING.venueMapUrl) : "");
    var location = WEDDING.venueNameText || "";

    var params = new URLSearchParams({
        action: "TEMPLATE",
        text: text,
        dates: start + "/" + end,
        details: details,
        location: location
    });

    return "https://calendar.google.com/calendar/render?" + params.toString();
}

function renderCountdown(distanceMs) {
    var root = document.getElementById("time");
    if (!root) return;

    var totalSeconds = Math.max(0, Math.floor(distanceMs / 1000));
    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    root.innerHTML =
        "<div class='timeBlock'><div class='timeBlock__value'>" + days + "</div><div class='timeBlock__label'>DAYS</div></div>" +
        "<div class='timeBlock'><div class='timeBlock__value'>" + formatNumber(hours) + "</div><div class='timeBlock__label'>HOURS</div></div>" +
        "<div class='timeBlock'><div class='timeBlock__value'>" + formatNumber(minutes) + "</div><div class='timeBlock__label'>MINUTES</div></div>" +
        "<div class='timeBlock'><div class='timeBlock__value'>" + formatNumber(seconds) + "</div><div class='timeBlock__label'>SECONDS</div></div>";
}

function initCountdown() {
    var note = document.getElementById("countdownNote");
    var target = new Date(WEDDING.weddingDateISO).getTime();
    if (!Number.isFinite(target)) {
        if (note) note.textContent = "Update the wedding date to see the countdown.";
        return;
    }

    var timer = setInterval(function () {
        var now = Date.now();
        var distance = target - now;

        if (distance <= 0) {
            clearInterval(timer);
            renderCountdown(0);
            if (note) note.textContent = "Today is the day. See you at the wedding!";
            return;
        }

        renderCountdown(distance);
    }, 1000);

    renderCountdown(target - Date.now());
}

function initMusicAutoplayOnFirstTap() {
    // deprecated (kept for backward compatibility)
}

function initMusicPreference() {
    var prompt = document.getElementById("musicPrompt");
    var yesBtn = document.getElementById("musicYes");
    var noBtn = document.getElementById("musicNo");
    var audio = document.getElementById("my_audio");

    if (!prompt || !yesBtn || !noBtn || !audio) return;

    var KEY = "wedding_music_preference_v1"; // "yes" | "no"
    var pref = null;
    try {
        pref = localStorage.getItem(KEY);
    } catch (e) { }

    function closePrompt() {
        prompt.classList.remove("is-open");
    }

    function openPrompt() {
        prompt.classList.add("is-open");
    }

    function remember(value) {
        try {
            localStorage.setItem(KEY, value);
        } catch (e) { }
    }

    if (pref === "yes") {
        // Don't auto-play; user already consented, but browsers still require a gesture.
        // We keep it silent until user taps somewhere, then start once.
        var started = false;
        function startOnNextGesture() {
            if (started) return;
            started = true;
            audio.play().catch(function () { });
            document.removeEventListener("click", startOnNextGesture);
            document.removeEventListener("touchstart", startOnNextGesture);
        }
        document.addEventListener("click", startOnNextGesture);
        document.addEventListener("touchstart", startOnNextGesture, { passive: true });
        closePrompt();
        return;
    }

    if (pref === "no") {
        closePrompt();
        return;
    }

    openPrompt();

    yesBtn.addEventListener("click", function () {
        remember("yes");
        closePrompt();
        audio.play().catch(function () { });
    });

    noBtn.addEventListener("click", function () {
        remember("no");
        closePrompt();
    });
}

function initMusicToggle() {
    var audio = document.getElementById("my_audio");
    var toggle = document.getElementById("musicToggle");
    var toggleText = document.getElementById("musicToggleText");
    if (!audio || !toggle || !toggleText) return;

    var KEY = "wedding_music_preference_v1"; // reuse same key
    function writePref(v) {
        try {
            localStorage.setItem(KEY, v);
        } catch (e) { }
    }

    function syncUi() {
        var isPlaying = !audio.paused && !audio.ended;
        toggle.classList.toggle("is-off", !isPlaying);
        toggleText.textContent = isPlaying ? "Music: On" : "Music: Off";
    }

    toggle.addEventListener("click", function () {
        if (audio.paused) {
            writePref("yes");
            audio.play().then(syncUi).catch(function () {
                syncUi();
            });
            return;
        }
        audio.pause();
        writePref("no");
        syncUi();
    });

    audio.addEventListener("play", syncUi);
    audio.addEventListener("pause", syncUi);
    syncUi();
}

function buildRsvpMessage(data) {
    var lines = [
        "RSVP for " + WEDDING.brideName + " & " + WEDDING.groomName,
        "",
        "Name: " + data.name,
        "Attending: " + data.attending,
        "Guests: " + data.guests
    ];
    if (data.message) lines.push("Message: " + data.message);
    return lines.join("\n");
}

function openBestRsvpTarget(message) {
    var encoded = encodeURIComponent(message);
    var phone = (WEDDING.contactPhoneE164 || "").replace(/[^\d+]/g, "");

    // Prefer WhatsApp if configured
    if (phone) {
        var waPhone = phone.replace("+", "");
        window.open("https://wa.me/" + waPhone + "?text=" + encoded, "_blank", "noreferrer");
        return;
    }

    // Fall back to email if configured
    if (WEDDING.contactEmail) {
        window.location.href = "mailto:" + encodeURIComponent(WEDDING.contactEmail) + "?subject=" + encodeURIComponent("Wedding RSVP") + "&body=" + encoded;
        return;
    }

    // Last resort: just copy to clipboard if possible
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(message).catch(function () { });
        alert("RSVP message copied. Please send it to the couple.");
    } else {
        alert(message);
    }
}

function initRsvp() {
    var form = document.getElementById("rsvpForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var fd = new FormData(form);
        var data = {
            name: String(fd.get("name") || "").trim(),
            guests: String(fd.get("guests") || "0").trim(),
            attending: String(fd.get("attending") || "Yes"),
            message: String(fd.get("message") || "").trim()
        };
        var msg = buildRsvpMessage(data);
        openBestRsvpTarget(msg);
        closeRsvpModal();
    });
}

function openRsvpModal() {
    var modal = document.getElementById("rsvpModal");
    if (!modal) return;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    var nameInput = modal.querySelector("input[name='name']");
    if (nameInput) nameInput.focus();
}

function closeRsvpModal() {
    var modal = document.getElementById("rsvpModal");
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
}

function initRsvpModal() {
    var modal = document.getElementById("rsvpModal");
    if (!modal) return;

    var openers = document.querySelectorAll("[data-open-rsvp]");
    openers.forEach(function (btn) {
        btn.addEventListener("click", function () {
            openRsvpModal();
        });
    });

    modal.querySelectorAll("[data-close-modal]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            closeRsvpModal();
        });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeRsvpModal();
    });
}

function initCalendarMenu() {
    var btn = document.getElementById("addToCalendarBtn");
    var menu = document.getElementById("calMenu");
    var closeBtn = document.getElementById("calMenuClose");
    var select = document.getElementById("calEventSelect");
    var icsLink = document.getElementById("calIcsLink");
    var googleLink = document.getElementById("calGoogleLink");
    if (!btn || !menu || !closeBtn || !select || !icsLink || !googleLink) return;

    var currentBlobUrl = null;
    function updateLinks() {
        var key = String(select.value || "wedding");
        var evt = EVENTS[key] || EVENTS.wedding;

        if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
        currentBlobUrl = buildIcsBlobUrl(evt);
        icsLink.setAttribute("href", currentBlobUrl);
        icsLink.setAttribute("download", (evt.title || "event").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "_") + ".ics");

        googleLink.setAttribute("href", buildGoogleCalendarUrl(evt));
    }

    function openMenu() {
        menu.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        updateLinks();
    }

    function closeMenu() {
        menu.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", function () {
        if (menu.classList.contains("is-open")) closeMenu();
        else openMenu();
    });

    closeBtn.addEventListener("click", closeMenu);
    select.addEventListener("change", updateLinks);

    document.addEventListener("click", function (e) {
        if (!menu.classList.contains("is-open")) return;
        if (menu.contains(e.target) || btn.contains(e.target)) return;
        closeMenu();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
    });
}

function initLanguageToggle() {
    var btn = document.getElementById("langToggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
        applyLanguage(currentLang === "en" ? "ta" : "en");
    });
    applyLanguage("en");
}

function initInvitationCover() {
    var cover = document.getElementById("invitationCover");
    var content = document.getElementById("invitationContent");
    var openBtn = document.getElementById("openInvitationBtn");

    if (!cover || !content || !openBtn) return;

    function showContent() {
        cover.style.display = "none";
        content.removeAttribute("aria-hidden");
        document.body.classList.remove("is-locked");
    }

    function showCover() {
        content.setAttribute("aria-hidden", "true");
        document.body.classList.add("is-locked");
    }

    showCover();

    openBtn.addEventListener("click", function () {
        cover.classList.add("is-fading-out");

        var audio = document.getElementById("my_audio");
        if (audio && audio.paused) {
            audio.play().catch(function () {});
            try { localStorage.setItem("wedding_music_preference_v1", "yes"); } catch(e){}
        }

        window.setTimeout(function () {
            showContent();
            cover.classList.remove("is-fading-out");
        }, 800);
    });
}

function hydrateUi() {
    setText("brideName", WEDDING.brideName);
    setText("groomName", WEDDING.groomName);
    setText("weddingDateText", WEDDING.weddingDateText);
    setText("weddingTimeText", WEDDING.weddingTimeText);
    setText("venueNameText", WEDDING.venueNameText);
    setText("venueNameTextInline", WEDDING.venueNameText);
    setHref("venueLink", WEDDING.venueMapUrl);
    setHref("mapLink", WEDDING.venueMapUrl);
    setText("venueAddressText", WEDDING.venueAddressText || WEDDING.venueNameText);
    setText("rsvpByText", WEDDING.rsvpText);
    setDownloadLink("downloadCardLink", WEDDING.invitationDownloadUrl);
    setText("invitationLine", WEDDING.invitationLine);
    setText("familyLine", WEDDING.familyLine);
    setText("loveLine", WEDDING.loveLine);
    setText("countdownTitle", WEDDING.countdownTitle);
    setText("mapTitle", WEDDING.mapTitle);
    setText("groomDetails", WEDDING.groomDetails);
    setText("brideDetails", WEDDING.brideDetails);
    setText("footerWebsite", WEDDING.footerWebsite);

    var contactLink = document.getElementById("contactLink");
    if (contactLink) {
        contactLink.textContent = WEDDING.contactPhoneDisplay;
        if (WEDDING.contactPhoneE164) {
            contactLink.setAttribute("href", "tel:" + WEDDING.contactPhoneE164.replace(/[^\d+]/g, ""));
        } else if (WEDDING.contactEmail) {
            contactLink.setAttribute("href", "mailto:" + encodeURIComponent(WEDDING.contactEmail));
        } else {
            contactLink.setAttribute("href", "#");
        }
    }
}

hydrateUi();
initLanguageToggle();
initInvitationCover();
initCountdown();
initCalendarMenu();
initRsvpModal();
initRsvp();
initMusicToggle();

(function() {
    var saveToCalendarBtn = document.getElementById("saveToCalendarBtn");
    if (saveToCalendarBtn) {
        saveToCalendarBtn.addEventListener("click", function() {
            var evt = EVENTS.engagement; // Save for 17th May
            window.open(buildGoogleCalendarUrl(evt), "_blank", "noreferrer");
        });
    }
})();
