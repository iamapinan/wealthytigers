// Contact page specific JavaScript
// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ to get your keys
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',  // Replace with your EmailJS Service ID
    templateID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
    publicKey: 'YOUR_PUBLIC_KEY'    // Replace with your EmailJS Public Key
};

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
});

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this);
    });

    // Real-time validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });

        field.addEventListener('input', function() {
            clearFieldError(this);
        });
    });

    // Email validation
    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.addEventListener('blur', function() {
            validateEmail(this);
        });
    }

    // Phone number formatting
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }
}

// Handle form submission
function handleFormSubmission(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Validate all fields before submission
    if (!validateForm(form)) {
        showMessage('กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง', 'error');
        return;
    }

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> กำลังส่ง...';
    submitBtn.disabled = true;

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.serviceID || EMAILJS_CONFIG.serviceID === 'YOUR_SERVICE_ID') {
        console.warn('EmailJS not configured. Using fallback mailto method.');
        sendViaMailto(data);
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }

    // Send email via EmailJS
    if (typeof emailjs !== 'undefined') {
        // Prepare email parameters
        const emailParams = {
            to_email: 'admin@wealthytigers.com',
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'ไม่ระบุ',
            company: data.company || 'ไม่ระบุ',
            subject: getSubjectText(data.subject),
            message: data.message,
            reply_to: data.email
        };

        emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, emailParams)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                showMessage('ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด', 'success');
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                console.error('Email send failed:', error);
                showMessage('เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้งหรือติดต่อเราโดยตรงที่ admin@wealthytigers.com', 'error');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Fallback to mailto
                sendViaMailto(data);
            });
    } else {
        console.warn('EmailJS library not loaded. Using fallback mailto method.');
        sendViaMailto(data);
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Get subject text from value
function getSubjectText(value) {
    const subjects = {
        'general': 'สอบถามทั่วไป',
        'partnership': 'ความร่วมมือ',
        'brand': 'สอบถามเกี่ยวกับแบรนด์',
        'other': 'อื่นๆ'
    };
    return subjects[value] || value;
}

// Fallback method using mailto
function sendViaMailto(data) {
    const subject = `Contact Form: ${getSubjectText(data.subject)} - ${data.name}`;
    const body = `
ชื่อ: ${data.name}
อีเมล: ${data.email}
เบอร์โทรศัพท์: ${data.phone || 'ไม่ระบุ'}
บริษัท: ${data.company || 'ไม่ระบุ'}
หัวข้อ: ${getSubjectText(data.subject)}

ข้อความ:
${data.message}
    `.trim();
    
    const mailtoLink = `mailto:admin@wealthytigers.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    showMessage('กำลังเปิดโปรแกรมอีเมลของคุณ หรือคุณสามารถส่งอีเมลโดยตรงไปที่ admin@wealthytigers.com', 'info');
}

// Form validation
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Additional email validation
    const emailField = form.querySelector('#email');
    if (emailField && !validateEmail(emailField)) {
        isValid = false;
    }
    
    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'กรุณากรอกข้อมูลนี้';
    } else if (field.type === 'email' && value) {
        isValid = validateEmailFormat(value);
        message = isValid ? '' : 'รูปแบบอีเมลไม่ถูกต้อง';
    }
    
    if (!isValid) {
        showFieldError(field, message);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

// Email validation
function validateEmail(field) {
    const value = field.value.trim();
    const isValid = validateEmailFormat(value);
    
    if (!isValid && value) {
        showFieldError(field, 'รูปแบบอีเมลไม่ถูกต้อง');
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

// Email format validation
function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone number formatting
function formatPhoneNumber(field) {
    let value = field.value.replace(/\D/g, ''); // Remove non-digits
    
    if (value.length > 0) {
        if (value.startsWith('0')) {
            // Thai mobile format: 0XX-XXX-XXXX
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
    }
    
    field.value = value;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Show message
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(messageDiv, form.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
            
            // Toggle current item
            if (isOpen) {
                item.classList.remove('open');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                item.classList.add('open');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
}

// Smooth scroll to form when clicking contact buttons
document.addEventListener('click', function(e) {
    if (e.target.closest('[href="#contact-form"]')) {
        e.preventDefault();
        const form = document.querySelector('.contact-form-section');
        if (form) {
            form.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Auto-resize textarea
document.addEventListener('input', function(e) {
    if (e.target.tagName === 'TEXTAREA') {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }
});
