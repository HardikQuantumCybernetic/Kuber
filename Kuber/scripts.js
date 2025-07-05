// --- Page Content (HTML as JS templates for routing) ---

const todaysSpecial = {
    name: "Paneer Tikka Masala",
    img: "assets/paneer-tikka.jpg",
    price: 260,
    description: "A chef’s favorite! Juicy paneer cubes marinated in aromatic spices, grilled to perfection, and simmered in a rich, creamy tomato gravy. Served with fresh coriander and a wedge of lemon.",
    rating: 4.9
};

const galleryImages = [
    {
        src: "assets/Restaurant_Ambiance.png",
        alt: "Restaurant Ambiance"
    },
    {
        src: "assets/Signature_Dish.jpg",
        alt: "Signature Dish"
    },
    {
        src: "assets/Family_Dining.jpg",
        alt: "Family Dining"
    },
    {
        src: "assets/Special_Event.jpg",
        alt: "Special Event"
    },
    {
        src: "assets/Chef_at_Work.jpg",
        alt: "Chef at Work"
    }
];

const pages = {
    home: `
        <section class="banner">
            <div class="banner-text">
                <h1 class="banner-title"><span id="typing-effect"></span></h1>
                <p class="banner-desc">
                    Discover the essence of pure vegetarian cuisine at Kuer, where tradition meets taste in every bite.
                    Experience a delightful culinary journey with our chef-curated menu, warm ambiance, and heartfelt hospitality.
                </p>
                <div class="banner-btns">
                    <button class="banner-btn" onclick="navigateTo('menu')">View Menu</button>
                    <button class="banner-btn" onclick="navigateTo('contact')">Contact Us</button>
                </div>
            </div>
            <div class="banner-image">
                <img src="assets/logo.png" alt="Kuer Restaurant Ambiance">
            </div>
        </section>
        <!-- Top Categories Section -->
        <section class="top-categories">
            <h2>Top Categories</h2>
            <div class="categories-list">
                <div class="category-card">
                    <img src="assets/veg.jpg" alt="Veg Dishes">
                    <div class="category-title">Veg</div>
                </div>
                <div class="category-card">
                    <img src="assets/starters.jpg" alt="Starters">
                    <div class="category-title">Starters</div>
                </div>
                <div class="category-card">
                    <img src="assets/street food.jpg" alt="Street Food">
                    <div class="category-title">Street Food</div>
                </div>
            </div>
        </section>
        <!-- Gallery Section -->
        <section class="gallery-section">
            <h2>Gallery</h2>
            <div class="gallery-grid" id="gallery-grid">
                ${galleryImages.map((img, i) => `
                    <div class="gallery-thumb" tabindex="0" data-index="${i}">
                        <img src="${img.src}" alt="${img.alt}">
                    </div>
                `).join('')}
            </div>
        </section>
        <section>
            <h2>Why Choose Kuer?</h2>
            <ul>
                <li>100% Pure Vegetarian Dishes</li>
                <li>Fresh, Locally Sourced Ingredients</li>
                <li>Family-Friendly and Modern Ambience</li>
                <li>Excellent Customer Ratings</li>
            </ul>
        </section>
        <section class="home-extra">
            <h2>Our Story</h2>
            <p>
                Since 1998, Kuer Vegetarian Hotel has been a destination for food lovers seeking authentic, healthy, and delicious vegetarian cuisine. Our chefs blend traditional recipes with modern flavors, ensuring every meal is a memorable experience.
            </p>
            <h2>Customer Reviews</h2>
            <div class="carousel" id="reviews-carousel">
                <div class="carousel-track" id="carousel-track">
                    <!-- Slides will be injected here -->
                </div>
            </div>
            <h2>Visit Us Today!</h2>
            <p>
                Whether you’re planning a family dinner, a celebration, or just a quick bite, Kuer welcomes you with open arms and a warm smile. Come taste the difference!
            </p>
        </section>
    `,
    menu: `
        <section>
            <h2>Our Menu</h2>
            <div class="todays-special">
                <div class="special-image">
                    <img src="${todaysSpecial.img}" alt="Today's Special: ${todaysSpecial.name}">
                </div>
                <div class="special-info">
                    <div class="special-label">Today's Special</div>
                    <div class="special-title">${todaysSpecial.name}</div>
                    <div class="special-desc">${todaysSpecial.description}</div>
                    <div class="special-meta">
                        <span class="special-price">₹${todaysSpecial.price}</span>
                        <span class="special-rating">${renderStars(todaysSpecial.rating)} ${todaysSpecial.rating.toFixed(1)}</span>
                    </div>
                    <button class="order-btn" onclick="orderDish('${todaysSpecial.name.replace(/'/g, '\'')}', '${todaysSpecial.price}')">Order Now</button>
                </div>
            </div>
            <div class="menu-filters" style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1.2rem;">
                <button class="menu-filter-btn active" data-category="All">All</button>
                <button class="menu-filter-btn" data-category="Starters">Starters</button>
                <button class="menu-filter-btn" data-category="Main Course">Main Course</button>
                <button class="menu-filter-btn" data-category="Desserts">Desserts</button>
                <button class="menu-filter-btn" data-category="Drinks">Drinks</button>
                <!-- Add more categories as needed -->
            </div>
            <div class="menu-search-bar" style="display:flex;justify-content:flex-end;margin-bottom:1rem;">
                <input id="menu-search-bar" type="text" placeholder="Search menu..." style="padding:0.5rem 1rem;border-radius:6px;border:1.5px solid #bbb;font-size:1rem;max-width:260px;">
                <button id="menu-search-btn" style="margin-left:0.5rem;padding:0.5rem 1.2rem;border-radius:6px;background:#8A784E;color:#fff;border:none;font-weight:bold;cursor:pointer;">Search</button>
            </div>
            <div class="menu-list" id="menuList"></div>
        </section>
    `,
    about: `
        <section class="about-container">
            <div class="about-image">
                <img src="assets/about.png" alt="Kuer Hotel Interior">
            </div>
            <div class="about-text">
                <h2 class="about-title">About Kuer</h2>
                <div class="about-section">
                    <p class="about-desc">
                        Founded in 1998, Kuer Vegetarian Hotel has been a beacon for plant-based food lovers.
                        Our journey started with a vision to bring authentic vegetarian delicacies to everyone in a welcoming, modern space.
                    </p>
                </div>
                <div class="about-section">
                    <h3>Our Mission</h3>
                    <p>
                        To serve tasty, healthy, and innovative vegetarian cuisine while promoting sustainability and community well-being.
                    </p>
                </div>
                <div class="about-section">
                    <h3>Our Values</h3>
                    <ul>
                        <li>Freshness and Quality</li>
                        <li>Hospitality and Warmth</li>
                        <li>Health and Wellness</li>
                        <li>Respect for Nature</li>
                    </ul>
                </div>
            </div>
        </section>
    `,
    contact: `
        <section class="contact-container">
            <div class="contact-info">
                <h2 class="contact-title">Contact Us</h2>
                <p class="contact-desc">
                    Have a question or want to make a reservation? Fill out the form and we'll get back to you soon!
                    <br>
                    Or message us directly on WhatsApp at <b>8080950921</b>.
                </p>
            </div>
            <form class="contact-form" id="contactForm" autocomplete="off" novalidate>
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required placeholder="Your Name">
                <div class="error-message" id="nameError"></div>

                <label for="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="your@email.com">
                <div class="error-message" id="emailError"></div>

                <label for="message">Message*</label>
                <textarea id="message" name="message" rows="4" required placeholder="Type your message"></textarea>
                <div class="error-message" id="messageError"></div>

                <button type="submit">Send via WhatsApp</button>
            </form>
        </section>
    `,
    location: `
        <section class="location-container">
            <h2 class="location-title">Find Us</h2>
            <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d122181.75450887518!2d74.49250732493879!3d16.866996546883335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc119559dc46063%3A0x3396aa2720b3bec5!2sAppasaheb%20Patil%20Nagar%2C%20Multiplex%20Road%2C%20opp.%20Ayukta%20Nivas%2C%20Sangli%2C%20Maharashtra%20416416!3m2!1d16.867013!2d74.5749091!5e0!3m2!1sen!2sin!4v1750948115618!5m2!1sen!2sin" style="border: 1px solid #ccc"></iframe>
            <div class="location-address">
                <b>Kuer Vegetarian Hotel</b><br>
                123 Green Street, Veggie District,<br>
                Mumbai, Maharashtra 400001, India
            </div>
            <div class="location-desc">
                Located in the heart of Mumbai, Kuer is easily accessible by road and public transport. Ample parking available!
            </div>
        </section>
    `,
    contact_location: `
        <section class="contact-location-container">
            <div class="contact-info">
                <h2 class="contact-title">Contact Us</h2>
                <p class="contact-desc">
                    Have a question or want to make a reservation? Fill out the form and we'll get back to you soon!<br>
                    Or message us directly on WhatsApp at <b>8080950921</b>.
                </p>
                <form class="contact-form" id="contactForm" autocomplete="off" novalidate>
                    <label for="name">Name*</label>
                    <input type="text" id="name" name="name" required placeholder="Your Name">
                    <div class="error-message" id="nameError"></div>
                    <label for="email">Email*</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com">
                    <div class="error-message" id="emailError"></div>
                    <label for="message">Message*</label>
                    <textarea id="message" name="message" rows="4" required placeholder="Type your message"></textarea>
                    <div class="error-message" id="messageError"></div>
                    <button type="submit">Send via WhatsApp</button>
                </form>
            </div>
            <div class="location-info">
                <h2 class="location-title">Find Us</h2>
                <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d122181.75450887518!2d74.49250732493879!3d16.866996546883335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc119559dc46063%3A0x3396aa2720b3bec5!2sAppasaheb%20Patil%20Nagar%2C%20Multiplex%20Road%2C%20opp.%20Ayukta%20Nivas%2C%20Sangli%2C%20Maharashtra%20416416!3m2!1d16.867013!2d74.5749091!5e0!3m2!1sen!2sin!4v1750948115618!5m2!1sen!2sin" style="border: 1px solid #ccc"></iframe>
                <div class="location-address">
                    <b>Kuer Vegetarian Hotel</b><br>
                    123 Green Street, Veggie District,<br>
                    Mumbai, Maharashtra 400001, India
                </div>
                <div class="location-desc">
                    Located in the heart of Mumbai, Kuer is easily accessible by road and public transport. Ample parking available!
                </div>
            </div>
        </section>
    `,
    services: `
    <section class="services-container">
        <!-- Loyalty/Offers Banner -->
        <div class="offers-banner">
            <div class="offers-banner-content">
                <div class="offers-banner-title">
                    <span>🎁</span> Join Our Loyalty Program & Save!
                </div>
                <div class="offers-banner-desc">
                    <b>Earn points</b> on every order and redeem for exclusive discounts.<br>
                    <span style="color:#e68900;font-weight:600;">Limited Time:</span> Get <b>10% OFF</b> your first order when you join!
                </div>
                <button class="offers-banner-btn" onclick="alert('Thank you for your interest! Please ask our staff to join the loyalty program.')">
                    Join Now
                </button>
            </div>
        </div>
        <h2 class="services-title">Our Services</h2>
        <div class="services-list">
            <div class="service-card">
                <i class="fas fa-utensils service-icon"></i>
                <h3>Restaurant Dining</h3>
                <p>Enjoy a wide variety of pure vegetarian dishes in a family-friendly, modern ambiance.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-truck service-icon"></i>
                <h3>Takeaway & Delivery</h3>
                <p>Order your favorite meals for takeaway or get them delivered to your doorstep, hot and fresh.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-birthday-cake service-icon"></i>
                <h3>Party & Event Catering</h3>
                <p>We cater for birthdays, weddings, and corporate events with customizable vegetarian menus.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-concierge-bell service-icon"></i>
                <h3>Special Requests</h3>
                <p>Have dietary needs or special requests? Let us know and we’ll make your experience memorable.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-leaf service-icon"></i>
                <h3>Healthy & Jain Options</h3>
                <p>We offer a dedicated menu for health-conscious guests and those seeking Jain-friendly meals, prepared with utmost care.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-mug-hot service-icon"></i>
                <h3>Breakfast Specials</h3>
                <p>Start your day with our delicious breakfast menu, featuring traditional and modern vegetarian favorites.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-gift service-icon"></i>
                <h3>Corporate & Bulk Orders</h3>
                <p>We handle large and corporate orders for meetings, seminars, and celebrations, ensuring timely delivery and quality.</p>
            </div>
        </div>
        <div class="services-extra">
            <h3>Why Choose Us?</h3>
            <ul>
                <li>Experienced chefs and courteous staff</li>
                <li>Customizable menu options for every occasion</li>
                <li>Strict hygiene and quality standards</li>
                <li>Special discounts for regular and bulk customers</li>
                <li>24/7 customer support for event planning</li>
            </ul>
            <h3>Contact Us for Service Inquiries</h3>
            <p>For bookings, catering, or any special requests, reach out via our <a href="#contact-location" data-page="contact_location" onclick="navigateTo('contact_location')">Contact & Location</a> page or call us at <b>8080950921</b>.</p>
        </div>
    </section>
    `
};
// --- Menu Filters Functionality ---
function setupMenuFilters() {
    const filterBtns = document.querySelectorAll('.menu-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const cat = this.dataset.category;
            let filtered = menuData;
            if (cat && cat !== "All") {
                filtered = menuData.filter(dish => dish.category === cat);
            }
            renderMenu(filtered);
        });
    });
}


// Dummy data for menu page
const menuData = [
    {
        name: "Paneer Tikka",
        img: "assets/paneer-tikka.jpg",
        price: 250,
        ingredients: "Paneer, yogurt, spices, bell peppers, onions",
        rating: 4.8,
        category: "Starters",
        description: "A chef’s favorite! Juicy paneer cubes marinated in aromatic spices, grilled to perfection, and served with crisp veggies and mint chutney."
    },
    {
        name: "Bhindi Masala",
        img: "assets/bhindi-masala.jpg",
        price: 220,
        ingredients: "Okra, onions, tomatoes, spices",
        rating: 4.8,
        category: "Main Course",
        description: "Fresh okra sautéed with onions, tomatoes, and a blend of traditional spices for a homestyle, flavorful delight."
    },
    {
        name: "Coconut Ladoo",
        img: "assets/coconut-ladoo.jpg",
        price: 150,
        ingredients: "Grated coconut, condensed milk, cardamom",
        rating: 4.9,
        category: "Desserts",
        description: "Soft, melt-in-mouth ladoos made from fresh coconut and condensed milk, delicately flavored with cardamom."
    },
    {
        name: "Vegetable Raita",
        img: "assets/vegetable-raita.jpg",
        price: 100,
        ingredients: "Yogurt, cucumber, spices",
        rating: 4.5,
        category: "Drinks",
        description: "Cool and refreshing yogurt mixed with crisp vegetables and a hint of roasted spices—perfect with any meal."
    },
    {
        name: "Kadai Vegetable",
        img: "assets/kadai-vegetable.jpg",
        price: 270,
        ingredients: "Mixed vegetables, spices, bell peppers",
        rating: 4.7,
        category: "Main Course",
        description: "A medley of garden-fresh vegetables tossed in a spicy kadai masala, finished with bell peppers and coriander."
    },
    {
        name: "Pulao Biryani",
        img: "assets/veg-biryani.jpg",
        price: 320,
        ingredients: "Basmati rice, mixed vegetables, spices",
        rating: 4.6,
        category: "Main Course",
        description: "Aromatic basmati rice cooked with seasonal vegetables and chef’s special biryani spices, garnished with fried onions."
    },
    {
        name: "Gobi Manchurian",
        img: "assets/gobi-manchurian.jpg",
        price: 180,
        ingredients: "Cauliflower, soy sauce, spices",
        rating: 4.9,
        category: "Starters",
        description: "Crispy cauliflower florets tossed in a tangy Indo-Chinese sauce, garnished with spring onions."
    },
    {
        name: "Pesarattu",
        img: "assets/pesarattu.jpg",
        price: 200,
        ingredients: "Green gram, spices, ginger",
        rating: 4.5,
        category: "Starters",
        description: "A healthy Andhra delicacy—crispy crepes made from green gram, served with ginger chutney."
    },
    {
        name: "Vegetable Spring Rolls",
        img: "assets/vegetable-spring-rolls.jpg",
        price: 180,
        ingredients: "Mixed vegetables, spring roll wrappers, spices",
        rating: 4.6,
        category: "Starters",
        description: "Golden-fried rolls stuffed with spiced vegetables, served with a sweet chili dipping sauce."
    },
    {
        name: "Aloo Tikki",
        img: "assets/aloo-tikki.jpg",
        price: 120,
        ingredients: "Potatoes, spices, herbs",
        rating: 4.8,
        category: "Starters",
        description: "Crispy potato patties seasoned with aromatic spices, served with tangy chutneys."
    },
    {
        name: "Malai Kofta",
        img: "assets/malai-kofta.jpg",
        price: 280,
        ingredients: "Paneer balls, cream, tomato gravy",
        rating: 4.8,
        category: "Main Course",
        description: "Soft paneer and potato dumplings simmered in a rich, creamy tomato-cashew gravy."
    },
    {
        name: "Coconut Ladoo",
        img: "assets/coconut-ladoo.jpg",
        price: 150,
        ingredients: "Grated coconut, condensed milk, cardamom",
        rating: 4.9,
        category: "Desserts",
        description: "Soft, melt-in-mouth ladoos made from fresh coconut and condensed milk, delicately flavored with cardamom."
    },
    {
        name: "Vegetable Raita",
        img: "assets/vegetable-raita.jpg",
        price: 100,
        ingredients: "Yogurt, cucumber, spices",
        rating: 4.5,
        category: "Drinks",
        description: "Cool and refreshing yogurt mixed with crisp vegetables and a hint of roasted spices—perfect with any meal."
    },
    {
        name: "Kadai Vegetable",
        img: "assets/kadai-vegetable.jpg",
        price: 270,
        ingredients: "Mixed vegetables, spices, bell peppers",
        rating: 4.7,
        category: "Main Course",
        description: "A medley of garden-fresh vegetables tossed in a spicy kadai masala, finished with bell peppers and coriander."
    },
    {
        name: "Pulao Biryani",
        img: "assets/veg-biryani.jpg",
        price: 320,
        ingredients: "Basmati rice, mixed vegetables, spices",
        rating: 4.6,
        category: "Main Course",
        description: "Aromatic basmati rice cooked with seasonal vegetables and chef’s special biryani spices, garnished with fried onions."
    },
    {
        name: "Gobi Manchurian",
        img: "assets/gobi-manchurian.jpg",
        price: 250,
        ingredients: "Cauliflower, soy sauce, spices",
        rating: 4.5,
        category: "Starters",
        description: "Crispy cauliflower florets tossed in a tangy Indo-Chinese sauce, garnished with spring onions."
    },
    {
        name: "Chaas (Buttermilk)",
        img: "assets/chaas.jpg",
        price: 80,
        ingredients: "Yogurt, water, spices",
        rating: 4.9,
        category: "Drinks",
        description: "A refreshing, cool buttermilk drink, lightly spiced and garnished with fresh coriander."
    },
    {
        name: "Vegetable Kathi Roll",
        img: "assets/vegetable-kathi-roll.jpg",
        price: 200,
        ingredients: "Paratha, mixed vegetables, sauces",
        rating: 4.8,
        category: "Starters",
        description: "Soft paratha rolled with spicy sautéed vegetables and chef’s signature sauces."
    },
    {
        name: "Pudding",
        img: "assets/pudding.jpg",
        price: 150,
        ingredients: "Milk, sugar, vanilla, nuts",
        rating: 4.8,
        category: "Desserts",
        description: "Creamy, smooth pudding made with milk and vanilla, topped with crunchy nuts."
    },
    {
        name: "Chole Bhature",
        img: "assets/chole-bhature.jpg",
        price: 200,
        ingredients: "Chickpeas, spices, flour, yogurt, onions",
        rating: 4.7,
        category: "Main Course",
        description: "Fluffy bhature served with spicy, tangy chickpea curry and fresh onions."
    },
    {
        name: "Vegetable Biryani",
        img: "assets/veg-biryani.jpg",
        price: 300,
        ingredients: "Basmati rice, mixed vegetables, spices, saffron",
        rating: 4.6,
        category: "Main Course",
        description: "Fragrant basmati rice layered with vegetables and saffron, slow-cooked to perfection."
    },
    {
        name: "Aloo Gobi",
        img: "assets/aloo-gobi.webp",
        price: 180,
        ingredients: "Potatoes, cauliflower, turmeric, cumin, coriander",
        rating: 4.8,
        category: "Main Course",
        description: "Classic North Indian dish of potatoes and cauliflower, cooked with turmeric, cumin, and fresh coriander."
    },
    {
        name: "Palak Paneer",
        img: "assets/palak-paneer.jpg",
        price: 250,
        ingredients: "Spinach, paneer, cream, spices",
        rating: 5.0,
        category: "Main Course",
        description: "Soft paneer cubes simmered in a creamy spinach gravy, finished with a touch of cream."
    },
    {
        name: "Masoor Dal",
        img: "assets/masoor-dal.jpg",
        price: 150,
        ingredients: "Red lentils, tomatoes, onions, spices",
        rating: 4.8,
        category: "Main Course",
        description: "Hearty red lentil curry cooked with tomatoes, onions, and chef’s blend of spices."
    },
    {
        name: "Dahi Puri",
        img: "assets/dahi-puri.jpg",
        price: 120,
        ingredients: "Puffed puris, yogurt, tamarind chutney, spices",
        rating: 4.5,
        category: "Street Food",
        description: "Crispy puris filled with spiced potatoes, yogurt, and tangy chutneys—a street food favorite."
    },
    {
        name: "Baingan Bharta",
        img: "assets/baingan-bharta.jpg",
        price: 220,
        ingredients: "Eggplant, tomatoes, onions, spices",
        rating: 4.6,
        category: "Main Course",
        description: "Smoky roasted eggplant mashed and cooked with tomatoes, onions, and aromatic spices."
    },
    {
        name: "Hakka Noodles",
        img: "assets/hakka-noodles.jpg",
        price: 250,
        ingredients: "Noodles, mixed vegetables, soy sauce, spices",
        rating: 4.8,
        category: "Main Course",
        description: "Stir-fried noodles tossed with crisp vegetables and a savory Indo-Chinese sauce."
    },
    {
        name: "Samosa Chaat",
        img: "assets/samosa-chaat.jpg",
        price: 150,
        ingredients: "Samosas, yogurt, chutneys, spices",
        rating: 4.8,
        category: "Street Food",
        description: "Crispy samosas topped with yogurt, tangy chutneys, and a sprinkle of chaat masala."
    },
    {
        name: "Gajar Halwa",
        img: "assets/gajar-halwa.jpg",
        price: 180,
        ingredients: "Carrots, milk, sugar, nuts",
        rating: 4.9,
        category: "Desserts",
        description: "Slow-cooked grated carrots in milk and ghee, sweetened and garnished with nuts."
    },
    {
        name: "Ras Malai",
        img: "assets/ras-malai.jpg",
        price: 200,
        ingredients: "Paneer, milk, sugar, cardamom",
        rating: 5.0,
        category: "Desserts",
        description: "Soft paneer discs soaked in sweet, cardamom-flavored milk, topped with pistachios."
    },
    {
        name: "Vegetable Korma",
        img: "assets/vegetable-korma.jpg",
        price: 280,
        ingredients: "Mixed vegetables, coconut, spices",
        rating: 4.5,
        category: "Main Course",
        description: "Mixed vegetables cooked in a creamy coconut-based gravy, delicately spiced."
    },
    {
        name: "Pani Puri",
        img: "assets/pani-puri.jpg",
        price: 100,
        ingredients: "Puffed puris, spiced water, potatoes, chickpeas",
        rating: 4.8,
        category: "Street Food",
        description: "Crispy puris filled with spicy water, potatoes, and chickpeas—a burst of flavors in every bite."
    },
    {
        name: "Tandoori Broccoli",
        img: "assets/tandoori-broccoli.jpg",
        price: 220,
        ingredients: "Broccoli, yogurt, spices",
        rating: 4.4,
        category: "Starters",
        description: "Broccoli florets marinated in spiced yogurt and roasted in the tandoor for a smoky finish."
    },
    {
        name: "Kadai Paneer",
        img: "assets/kadai-paneer.jpg",
        price: 270,
        ingredients: "Paneer, bell peppers, tomatoes, spices",
        rating: 4.7,
        category: "Main Course",
        description: "Paneer cubes and bell peppers tossed in a spicy kadai masala, finished with fresh coriander."
    },
    {
        name: "Vegetable Pakora",
        img: "assets/vegetable-pakora.jpg",
        price: 150,
        ingredients: "Mixed vegetables, chickpea flour, spices",
        rating: 4.8,
        category: "Starters",
        description: "Assorted vegetables dipped in spiced chickpea batter and deep-fried till golden."
    },
    {
        name: "Methi Thepla",
        img: "assets/methi-thepla.jpg",
        price: 120,
        ingredients: "Fenugreek leaves, flour, spices",
        rating: 4.8,
        category: "Main Course",
        description: "Gujarati-style flatbreads made with fresh fenugreek leaves and aromatic spices."
    },
    {
        name: "Paneer Bhurji",
        img: "assets/paneer-bhurji.jpg",
        price: 210,
        ingredients: "Paneer, onions, tomatoes, spices",
        rating: 4.6,
        category: "Main Course",
        description: "Scrambled paneer cooked with onions, tomatoes, and chef’s special masala."
    },
    {
        name: "Moong Dal Halwa",
        img: "assets/moong-dal-halwa.jpg",
        price: 190,
        ingredients: "Moong dal, ghee, sugar, cardamom, nuts",
        rating: 4.8,
        category: "Desserts",
        description: "Rich and aromatic halwa made from moong dal, slow-cooked in ghee and garnished with nuts."
    },
    {
        name: "Corn Cheese Balls",
        img: "assets/corn-cheese-balls.jpg",
        price: 160,
        ingredients: "Corn, cheese, potatoes, spices, breadcrumbs",
        rating: 4.5,
        category: "Starters",
        description: "Crispy golden balls with a gooey cheese and corn filling, served with tangy dip."
    }

    
];

// --- SPA Navigation & Page Transitions ---
const main = document.getElementById('page-content');
const navLinks = document.querySelectorAll('.menu-items a');
const themeToggle = document.getElementById('theme-toggle');

function setTheme(dark) {
    document.body.classList.toggle('dark', dark);
    if (themeToggle) themeToggle.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

function setupTheme() {
    const saved = localStorage.getItem('theme');
    setTheme(saved === 'dark');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTheme(!document.body.classList.contains('dark'));
        });
    }
}

function navigateTo(page) {
    if (!(page in pages)) page = 'home';

    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    main.style.opacity = 0;
    setTimeout(() => {
        main.innerHTML = pages[page];
        if (page === 'menu') {
            renderMenu();
            setupMenuFilters();
        }
        if (page === 'contact_location') setupContactForm();
        if (page === 'home') {
            startTypingEffect();
            setupGalleryLightbox();
        }
        setTimeout(() => { main.style.opacity = 1; }, 80);
    }, 280);
}

// Handle nav click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
        window.scrollTo({top: 0, behavior: 'smooth'});
        // Close navbar if open (for mobile)
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle && navToggle.checked) {
            navToggle.checked = false;
        }
    });
});

// Banner buttons navigation
window.navigateTo = navigateTo;

// Load Home by default
document.addEventListener('DOMContentLoaded', () => {
    main.style.opacity = 1;
    navigateTo('home');
    setupTheme();
    // Update nav links for new pages
    const menuItems = document.querySelector('.menu-items');
    if (menuItems) {
        menuItems.innerHTML = `
            <li><a href="#home" data-page="home" class="active">Home</a></li>
            <li><a href="#Menu" data-page="menu">Menu</a></li>
            <li><a href="#About us" data-page="about">About Us</a></li>
            <li><a href="#contact-location" data-page="contact_location">Contact & Location</a></li>
            <li><a href="#services" data-page="services">Services</a></li>
        `;
        // Re-attach nav event listeners
        document.querySelectorAll('.menu-items a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(link.dataset.page);
                window.scrollTo({top: 0, behavior: 'smooth'});
                const navToggle = document.getElementById('nav-toggle');
                if (navToggle && navToggle.checked) navToggle.checked = false;
            });
        });
    }
});

// --- Menu Page Rendering ---
function renderMenu(filteredMenu) {
    const menuList = document.getElementById('menuList');
    const data = (typeof filteredMenu !== 'undefined') ? filteredMenu : menuData;
    menuList.innerHTML = '';
    if (data.length === 0) {
        menuList.innerHTML = '<div style="padding:2rem;text-align:center;color:#888;font-size:1.2rem;">No menu items found.</div>';
        return;
    }
    data.forEach((dish, i) => {
        menuList.innerHTML += `
            <div class="menu-card" style="animation-delay:${i * 0.08}s">
                <img src="${dish.img}" alt="${dish.name}">
                <div class="menu-info">
                    <div class="menu-title">${dish.name}</div>
                    <div class="menu-desc" style="font-size:0.98rem;color:#666;margin-bottom:0.3em;">${dish.description || ""}</div>
                    <div class="menu-price">₹${dish.price}</div>
                    <div class="menu-ingredients">Ingredients: ${dish.ingredients}</div>
                    <div class="menu-rating">${renderStars(dish.rating)} ${dish.rating.toFixed(1)}</div>
                    <button class="order-btn" onclick="orderDish('${dish.name.replace(/'/g, '\'')}', '${dish.price}')">Order</button>
                </div>
            </div>
        `;
    });
}

function renderStars(rating) {
    const rounded = Math.round(rating);
    let stars = "";
    for (let i = 0; i < 5; ++i) {
        stars += `<span class="star">${i < rounded ? '★' : '☆'}</span>`;
    }
    return stars;
}

// --- Menu Search Functionality ---
document.addEventListener('DOMContentLoaded', function() {
    // Delegate because menu page is loaded dynamically
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'menu-search-btn') {
            const input = document.getElementById('menu-search-bar');
            const query = input.value.trim().toLowerCase();
            if (!query) {
                renderMenu(menuData);
                return;
            }
            const filtered = menuData.filter(dish =>
                dish.name.toLowerCase().includes(query) ||
                dish.ingredients.toLowerCase().includes(query)
            );
            renderMenu(filtered);
        }
    });
    // Optional: search on enter key
    document.body.addEventListener('keydown', function(e) {
        if (e.target && e.target.id === 'menu-search-bar' && e.key === 'Enter') {
            document.getElementById('menu-search-btn').click();
        }
    });
});

// --- Contact Form: Validation & WhatsApp Submission ---
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const nameEl = form.querySelector('#name');
    const emailEl = form.querySelector('#email');
    const messageEl = form.querySelector('#message');
    const nameError = form.querySelector('#nameError');
    const emailError = form.querySelector('#emailError');
    const messageError = form.querySelector('#messageError');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        if (!nameEl.value.trim()) {
            nameError.textContent = "Name is required.";
            valid = false;
        }
        // Email is now optional, but if provided, must be valid
        if (emailEl.value.trim() && !validateEmail(emailEl.value)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }
        if (!messageEl.value.trim()) {
            messageError.textContent = "Message is required.";
            valid = false;
        }
        if (!valid) return;

        // WhatsApp submission
        const phone = "918080950921";
        let text = `Hi Kuer,%0AMy name is ${encodeURIComponent(nameEl.value.trim())}.`;
        if (emailEl.value.trim()) {
            text += `%0AEmail: ${encodeURIComponent(emailEl.value.trim())}`;
        }
        text += `%0AMessage: ${encodeURIComponent(messageEl.value.trim())}`;
        const url = `https://wa.me/${phone}?text=${text}`;
        window.open(url, '_blank');
    });
}

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
  const themeCheckbox = document.getElementById('checkbox');
  // Set initial state from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeCheckbox.checked = true;
  } else {
    document.body.classList.remove('dark');
    themeCheckbox.checked = false;
  }
  themeCheckbox.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});

// --- Typing Effect for Banner Title ---
document.addEventListener('DOMContentLoaded', function() {
    const typingEffect = document.getElementById('typing-effect');
    const titleText = "Welcome to Kuer Vegetarian Hotel";
    let index = 0;

    function type() {
        if (index < titleText.length) {
            typingEffect.textContent += titleText.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    type();
});

// --- Typing Effect for Home Page ---
function startTypingEffect() {
    const typingTexts = [
        "Welcome to Kuer Vegetarian Hotel",
        "Pure Veg. Pure Taste. Pure Joy!",
        "Experience Authentic Vegetarian Cuisine"
    ];
    const typingElement = document.getElementById("typing-effect");
    if (!typingElement) return;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;
    let lastText = "";

    function type() {
        const currentText = typingTexts[textIndex];
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            delay = 40;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            delay = 80;
        }

        // Responsive fix: ensure scroll/resize doesn't cut text
        typingElement.style.maxWidth = "100vw";
        typingElement.style.wordBreak = "break-word";
        typingElement.style.whiteSpace = "normal";

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            delay = 1200;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            delay = 500;
        }
        setTimeout(type, delay);
    }
    // Clear previous text for SPA reloads
    typingElement.textContent = "";
    type();
}

// --- Router and Page Loader ---
function loadPage(page) {
    const content = pages[page] || pages.home;
    document.getElementById("page-content").innerHTML = content;
    if (page === "home") {
        startTypingEffect();
    }
    // ...existing code...
}

// --- Customer Reviews Carousel Data & Logic ---
const reviewsData = [
    {
        name: "Akshay Kumar",
        photo: "assets/customer1.jpg",
        rating: 5,
        review: "The best vegetarian food in town! The ambiance and service are top-notch."
    },
    {
        name: "Allu Arjun",
        photo: "assets/customer2.jpg",
        rating: 5,
        review: "A must-visit for anyone who loves pure veg food. Highly recommended!"
    },
    {
        name: "Naveen Kumar Gowda",
        photo: "assets/customer3.jpg",
        rating: 4.8,
        review: "Delicious food, great variety, and friendly staff. Will visit again!"
    },
    {
        name: "Hrithik Roshan",
        photo: "assets/customer4.jpg",
        rating: 5,
        review: "Authentic taste and cozy atmosphere. Loved the desserts!"
    }
];

function renderReviewsCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    track.innerHTML = '';
    reviewsData.forEach((r, i) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${r.photo}" alt="${r.name}" class="carousel-photo">
            <div class="carousel-review-text">“${r.review}”</div>
            <div class="carousel-reviewer">
                <span class="carousel-name">- ${r.name}</span>
                <span class="carousel-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
            </div>
        `;
        track.appendChild(slide);
    });
}

let currentSlide = 0;
function goToSlide(idx) {
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    if (!track || !slides.length) return;
    currentSlide = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;
    slides.forEach((s, i) => s.setAttribute('aria-hidden', i !== idx));
}

function setupCarouselEvents() {
    // Only swipe support, no arrow buttons or dots
    const track = document.getElementById('carousel-track');
    let startX = 0;
    let isDown = false;
    if (track) {
        track.addEventListener('touchstart', e => { isDown = true; startX = e.touches[0].clientX; });
        track.addEventListener('touchend', e => { isDown = false; });
        track.addEventListener('touchmove', e => {
            if (!isDown) return;
            const dx = e.touches[0].clientX - startX;
            if (Math.abs(dx) > 50) {
                if (dx < 0) goToSlide((currentSlide + 1) % reviewsData.length);
                else goToSlide((currentSlide - 1 + reviewsData.length) % reviewsData.length);
                isDown = false;
            }
        });
    }
}

function initReviewsCarousel() {
    renderReviewsCarousel();
    goToSlide(0);
    setupCarouselEvents();
}

// Initialize carousel on home page load
const origStartTypingEffect = startTypingEffect;
startTypingEffect = function() {
    if (typeof origStartTypingEffect === 'function') origStartTypingEffect();
    setTimeout(initReviewsCarousel, 100); // Wait for DOM
};

// --- Menu Item Order Functionality ---
// Add orderDish function to handle order button click
window.orderDish = function(dishName, dishPrice) {
    // Create a modal for user input
    let modal = document.getElementById('order-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'order-modal';
        modal.innerHTML = `
            <div class="order-modal-backdrop"></div>
            <div class="order-modal-content">
                <h2>Order Details</h2>
                <form id="orderForm">
                    <label>Dish</label>
                    <input type="text" id="orderDishName" readonly>
                    <label>Price</label>
                    <input type="text" id="orderDishPrice" readonly>
                    <label>Your Name*</label>
                    <input type="text" id="orderUserName" required placeholder="Your Name">
                    <label>Email*</label>
                    <input type="email" id="orderUserEmail" required placeholder="your@email.com">
                    <div class="order-modal-actions">
                        <button type="submit" class="order-btn">Order via WhatsApp</button>
                        <button type="button" id="orderCancelBtn">Cancel</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        // Style for modal (quick inline for now)
        const style = document.createElement('style');
        style.innerHTML = `
        #order-modal { position: fixed; z-index: 9999; left: 0; top: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; }
        .order-modal-backdrop { position: absolute; left: 0; top: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.35); }
        .order-modal-content { position: relative; background: #fff; border-radius: 18px; padding: 2.2em 2em 1.5em 2em; box-shadow: 0 8px 32px rgba(60,60,60,0.18); min-width: 320px; max-width: 95vw; z-index: 2; }
        .order-modal-content label { display: block; margin-top: 1em; font-weight: 600; }
        .order-modal-content input { width: 100%; padding: 0.5em; margin-top: 0.2em; border-radius: 6px; border: 1.2px solid #bbb; font-size: 1.05em; }
        .order-modal-actions { display: flex; gap: 1em; margin-top: 1.5em; justify-content: flex-end; }
        .order-modal-actions .order-btn { min-width: 120px; background: #8A784E; color: #fff; border: none; border-radius: 6px; padding: 0.5em 1.2em; font-weight: bold; cursor: pointer; transition: background 0.2s; }
        .order-modal-actions .order-btn:hover { background: #6d5e3a; }
        .order-modal-actions #orderCancelBtn { min-width: 120px; background: #fff; color: #8A784E; border: 1.5px solid #8A784E; border-radius: 6px; padding: 0.5em 1.2em; font-weight: bold; cursor: pointer; transition: background 0.2s, color 0.2s; }
        .order-modal-actions #orderCancelBtn:hover { background: #f7f3ea; color: #6d5e3a; }
        .order-modal-content h2 { margin-top: 0; }
        @media (max-width: 600px) { .order-modal-content { padding: 1.2em 0.7em; min-width: 0; } }
        body.dark .order-modal-content { background: #232313; color: #ffe99a; }
        body.dark .order-modal-content input { background: #232313; color: #ffe99a; border: 1.2px solid #8A784E; }
        body.dark .order-modal-actions #orderCancelBtn { background: #232313; color: #ffe99a; border: 1.5px solid #ffe99a; }
        body.dark .order-modal-actions #orderCancelBtn:hover { background: #35351a; color: #ffe99a; }
        `;
        document.head.appendChild(style);
    }
    // Set values
    document.getElementById('orderDishName').value = dishName;
    document.getElementById('orderDishPrice').value = `₹${dishPrice}`;
    document.getElementById('orderUserName').value = '';
    document.getElementById('orderUserEmail').value = '';
    modal.style.display = 'flex';
    // Cancel button
    document.getElementById('orderCancelBtn').onclick = function() {
        modal.style.display = 'none';
    };
    // Form submit
    document.getElementById('orderForm').onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('orderUserName').value.trim();
        const email = document.getElementById('orderUserEmail').value.trim();
        if (!name || !email) return;
        const phone = "918080950921";
        const text = encodeURIComponent(
            `Hi Kuer,\nI would like to prebook:\nDish: ${dishName}\nPrice: ₹${dishPrice}\nName: ${name}\nEmail: ${email}`
        );
        const url = `https://wa.me/${phone}?text=${text}`;
        window.open(url, '_blank');
        modal.style.display = 'none';
    };
};

// --- Gallery Lightbox Logic ---
function setupGalleryLightbox() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    let modal = document.getElementById('gallery-lightbox');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'gallery-lightbox';
        modal.innerHTML = `
            <div class="gallery-lightbox-backdrop"></div>
            <div class="gallery-lightbox-content">
                <button class="gallery-lightbox-close" aria-label="Close">&times;</button>
                <button class="gallery-lightbox-arrow gallery-lightbox-prev" aria-label="Previous">&#8592;</button>
                <img class="gallery-lightbox-img" src="" alt="">
                <button class="gallery-lightbox-arrow gallery-lightbox-next" aria-label="Next">&#8594;</button>
                <div class="gallery-lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(modal);
        // Minimal style for modal (append only once)
        if (!document.getElementById('gallery-lightbox-style')) {
            const style = document.createElement('style');
            style.id = 'gallery-lightbox-style';
            style.innerHTML = `
            #gallery-lightbox { display:none; position:fixed; z-index:9999; left:0; top:0; width:100vw; height:100vh; align-items:center; justify-content:center; }
            .gallery-lightbox-backdrop { position:absolute; left:0; top:0; width:100vw; height:100vh; background:rgba(0,0,0,0.7); }
            .gallery-lightbox-content { position:relative; z-index:2; display:flex; flex-direction:column; align-items:center; }
            .gallery-lightbox-img { max-width:90vw; max-height:70vh; border-radius:1.2rem; box-shadow:0 4px 32px #0008; background:#fff; }
            .gallery-lightbox-close { position:absolute; top:10px; right:18px; font-size:2.2rem; background:none; border:none; color:#fff; cursor:pointer; z-index:3; }
            .gallery-lightbox-arrow { position:absolute; top:50%; transform:translateY(-50%); font-size:2.2rem; background:none; border:none; color:#fff; cursor:pointer; z-index:3; }
            .gallery-lightbox-prev { left:18px; }
            .gallery-lightbox-next { right:18px; }
            .gallery-lightbox-caption { margin-top:1.1em; color:#fff; font-size:1.1rem; text-align:center; text-shadow:0 2px 8px #000c; }
            @media (max-width:700px) {
                .gallery-lightbox-img { max-width:98vw; max-height:50vh; }
            }
            body.dark #gallery-lightbox .gallery-lightbox-caption { color:#ffe99a; }
            `;
            document.head.appendChild(style);
        }
    }
    let current = 0;
    function show(idx) {
        current = idx;
        const img = galleryImages[current];
        modal.querySelector('.gallery-lightbox-img').src = img.src;
        modal.querySelector('.gallery-lightbox-img').alt = img.alt;
        modal.querySelector('.gallery-lightbox-caption').textContent = img.alt;
        modal.style.display = 'flex';
    }
    function hide() {
        modal.style.display = 'none';
    }
    function prev() {
        show((current - 1 + galleryImages.length) % galleryImages.length);
    }
    function next() {
        show((current + 1) % galleryImages.length);
    }
    // Event listeners
    grid.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.onclick = () => show(Number(thumb.dataset.index));
        thumb.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { show(Number(thumb.dataset.index)); } };
    });
    modal.querySelector('.gallery-lightbox-close').onclick = hide;
    modal.querySelector('.gallery-lightbox-backdrop').onclick = hide;
    modal.querySelector('.gallery-lightbox-prev').onclick = prev;
    modal.querySelector('.gallery-lightbox-next').onclick = next;
    // Keyboard navigation
    modal.addEventListener('keydown', function(e) {
        if (modal.style.display !== 'flex') return;
        if (e.key === 'Escape') hide();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });
    // Focus for accessibility
    modal.addEventListener('transitionend', function() {
        if (modal.style.display === 'flex') modal.querySelector('.gallery-lightbox-img').focus();
    });
    // Trap focus inside modal
    modal.tabIndex = -1;
    // Allow keyboard navigation when open
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') hide();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        }
    });
}

// Initial page load
window.addEventListener("DOMContentLoaded", () => {
    loadPage("home");
    // On DOMContentLoaded, replace the theme switcher with a button if not already present
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher && !document.getElementById('theme-toggle')) {
        const btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.type = 'button';
        btn.innerHTML = document.body.classList.contains('dark') ? '☀️' : '🌙';
        btn.title = 'Toggle dark/light mode';
        btn.onclick = function() {
            setTheme(!document.body.classList.contains('dark'));
            btn.innerHTML = document.body.classList.contains('dark') ? '☀️' : '🌙';
        };
        themeSwitcher.innerHTML = '';
        themeSwitcher.appendChild(btn);
    }
});
