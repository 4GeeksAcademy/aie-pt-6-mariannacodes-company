const MESSAGES = {
    errors: {
        fullName: "Ingresa tu nombre completo (nombre y apellido)",
        email: "Ingresa un email válido (ejemplo: nombre@correo.com)",
        phone: "El teléfono debe incluir código de país (ejemplo: +57 300 123 4567 o +1 305 123 4567)",
        country: "Selecciona tu país",
        city: "Selecciona tu ciudad",
        referralSource: "Cuéntanos cómo conociste Brasaland",
        birthDate: "Debes ser mayor de 18 años para registrarte en Brasa Points",
        terms: "Debes aceptar los términos del programa Brasa Points para continuar"
    },
    success: {
        title: "¡Bienvenido a Brasa Points!",
        body: "Tu registro ha sido exitoso. Recibirás un email de confirmación en los próximos minutos con los detalles de tu cuenta y cómo empezar a acumular puntos.",
        closing: "¡Ya puedes disfrutar de tus beneficios en cualquiera de nuestras 14 ubicaciones!"
    }
};

const CITIES = {
    colombia: [
        { label: "Medellín", value: "medellin" },
        { label: "Bogotá", value: "bogota" },
        { label: "Cali", value: "cali" }
    ],
    "estados-unidos": [
        { label: "Miami", value: "miami" },
        { label: "Orlando", value: "orlando" }
    ]
};

const LOCATIONS = {
    "colombia:medellin": [
        { label: "Brasaland El Poblado", value: "brasaland-el-poblado" },
        { label: "Brasaland Laureles", value: "brasaland-laureles" },
        { label: "Brasaland Envigado", value: "brasaland-envigado" },
        { label: "Brasaland Sabaneta", value: "brasaland-sabaneta" }
    ],
    "colombia:bogota": [
        { label: "Brasaland Usaquén", value: "brasaland-usaquen" },
        { label: "Brasaland Chapinero", value: "brasaland-chapinero" },
        { label: "Brasaland Zona Rosa", value: "brasaland-zona-rosa" }
    ],
    "colombia:cali": [
        { label: "Brasaland Granada", value: "brasaland-granada" },
        { label: "Brasaland Ciudad Jardín", value: "brasaland-ciudad-jardin" },
        { label: "Brasaland Unicentro", value: "brasaland-unicentro" }
    ],
    "estados-unidos:miami": [
        { label: "Brasaland Brickell", value: "brasaland-brickell" },
        { label: "Brasaland Coral Gables", value: "brasaland-coral-gables" }
    ],
    "estados-unidos:orlando": [
        { label: "Brasaland Downtown", value: "brasaland-downtown" },
        { label: "Brasaland International Drive", value: "brasaland-international-drive" }
    ]
};

const form = document.getElementById("brasaPointsForm");
const country = document.getElementById("country");
const city = document.getElementById("city");
const favoriteLocation = document.getElementById("favoriteLocation");
const successMessage = document.getElementById("successMessage");
const requiredFieldIds = [
    "fullName",
    "email",
    "phone",
    "country",
    "city",
    "referralSource",
    "birthDate",
    "terms"
];

document.getElementById("successTitle").textContent = MESSAGES.success.title;
document.getElementById("successBody").textContent = MESSAGES.success.body;
document.getElementById("successClosing").textContent = MESSAGES.success.closing;

function controlsFor(fieldId) {
    return form.querySelectorAll(`[aria-describedby="${fieldId}-error"]`);
}

function updateControlStyle(fieldId, state) {
    controlsFor(fieldId).forEach((control) => {
        control.classList.remove(
            "border-red-700",
            "border-green-700",
            "outline",
            "outline-2",
            "outline-offset-2",
            "outline-red-600",
            "outline-green-700"
        );

        if (state === "neutral") {
            return;
        }

        if (control.type === "checkbox") {
            control.classList.add(
                "outline",
                "outline-2",
                "outline-offset-2",
                state === "error" ? "outline-red-600" : "outline-green-700"
            );
            return;
        }

        control.classList.add(state === "error" ? "border-red-700" : "border-green-700");
    });
}

function showError(fieldId, message) {
    const error = document.getElementById(`${fieldId}-error`);
    error.textContent = message;
    error.hidden = false;
    controlsFor(fieldId).forEach((control) => control.setAttribute("aria-invalid", "true"));
    updateControlStyle(fieldId, "error");
}

function clearError(fieldId) {
    const error = document.getElementById(`${fieldId}-error`);
    error.textContent = "";
    error.hidden = true;
    controlsFor(fieldId).forEach((control) => control.setAttribute("aria-invalid", "false"));
    updateControlStyle(fieldId, requiredFieldIds.includes(fieldId) ? "valid" : "neutral");
}

function resetFieldStatus(fieldId) {
    const error = document.getElementById(`${fieldId}-error`);
    error.textContent = "";
    error.hidden = true;
    controlsFor(fieldId).forEach((control) => control.setAttribute("aria-invalid", "false"));
    updateControlStyle(fieldId, "neutral");
}

function replaceOptions(select, placeholder, options = []) {
    select.replaceChildren(new Option(placeholder, ""));
    options.forEach(({ label, value }) => select.add(new Option(label, value)));
}

function updateCities() {
    replaceOptions(city, "Selecciona una ciudad");
    replaceOptions(favoriteLocation, "Selecciona una ubicación");
    city.disabled = true;
    favoriteLocation.disabled = true;
    resetFieldStatus("city");
    resetFieldStatus("favoriteLocation");

    const cities = CITIES[country.value];
    if (!cities) {
        return;
    }

    replaceOptions(city, "Selecciona una ciudad", cities);
    city.disabled = false;
}

function updateFavoriteLocations() {
    replaceOptions(favoriteLocation, "Selecciona una ubicación");
    favoriteLocation.disabled = true;
    resetFieldStatus("favoriteLocation");

    const locations = LOCATIONS[`${country.value}:${city.value}`];
    if (!locations) {
        return;
    }

    replaceOptions(favoriteLocation, "Selecciona una ubicación", locations);
    favoriteLocation.disabled = false;
}

function isAdultBirthDate(value) {
    if (!value) {
        return false;
    }

    const [year, month, day] = value.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);
    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getDate() !== day
    ) {
        return false;
    }

    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (birthDate > todayDate) {
        return false;
    }

    let age = today.getFullYear() - year;
    if (
        today.getMonth() + 1 < month ||
        (today.getMonth() + 1 === month && today.getDate() < day)
    ) {
        age -= 1;
    }

    return age > 18;
}

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) {
        resetFieldStatus(fieldId);
        return true;
    }

    if (field.disabled) {
        resetFieldStatus(fieldId);
        return true;
    }

    const value = field.type === "checkbox" ? field.checked : field.value.trim();
    let message = "";

    switch (fieldId) {
        case "fullName":
            if (value.split(/\s+/).filter(Boolean).length < 2) {
                message = MESSAGES.errors.fullName;
            }
            break;
        case "email":
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                message = MESSAGES.errors.email;
            }
            break;
        case "phone":
            if (!/^\+(?:57|1)\s+\d(?:[\d -]*\d)?$/.test(value)) {
                message = MESSAGES.errors.phone;
            }
            break;
        case "country":
            if (!value) {
                message = MESSAGES.errors.country;
            }
            break;
        case "city":
            if (!value) {
                message = MESSAGES.errors.city;
            }
            break;
        case "referralSource":
            if (!value) {
                message = MESSAGES.errors.referralSource;
            }
            break;
        case "birthDate":
            if (!isAdultBirthDate(value)) {
                message = MESSAGES.errors.birthDate;
            }
            break;
        case "terms":
            if (!value) {
                message = MESSAGES.errors.terms;
            }
            break;
        default:
            break;
    }

    if (message) {
        showError(fieldId, message);
        return false;
    }

    clearError(fieldId);
    return true;
}

country.addEventListener("change", updateCities);
city.addEventListener("change", updateFavoriteLocations);

form.querySelectorAll("[aria-describedby]").forEach((control) => {
    const fieldId = control.getAttribute("aria-describedby").replace(/-error$/, "");

    control.addEventListener("blur", () => validateField(fieldId));
    ["input", "change"].forEach((eventName) => {
        control.addEventListener(eventName, () => {
            const error = document.getElementById(`${fieldId}-error`);
            if (!error.hidden) {
                validateField(fieldId);
            }
        });
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const results = requiredFieldIds.map((fieldId) => ({
        fieldId,
        valid: validateField(fieldId)
    }));
    const firstInvalid = results.find((result) => !result.valid);

    if (firstInvalid) {
        document.getElementById(firstInvalid.fieldId).focus();
        return;
    }

    form.hidden = true;
    successMessage.hidden = false;
});

document.getElementById("clearForm").addEventListener("click", () => {
    form.reset();
    replaceOptions(city, "Selecciona una ciudad");
    replaceOptions(favoriteLocation, "Selecciona una ubicación");
    city.disabled = true;
    favoriteLocation.disabled = true;

    form.querySelectorAll("[id$='-error']").forEach((error) => {
        error.textContent = "";
        error.hidden = true;
    });
    form.querySelectorAll("[aria-describedby]").forEach((control) => {
        control.setAttribute("aria-invalid", "false");
        const fieldId = control.getAttribute("aria-describedby").replace(/-error$/, "");
        updateControlStyle(fieldId, "neutral");
    });

    successMessage.hidden = true;
    form.hidden = false;
    document.getElementById("fullName").focus();
});