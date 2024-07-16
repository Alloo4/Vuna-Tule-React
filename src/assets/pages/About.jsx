import React from 'react';

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <img id="aimg" src="https://images.pexels.com/photos/6214390/pexels-photo-6214390.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Organic farm photo" />
      <p>Welcome to Vuna Tule!</p>
      <p>At Vuna Tule, we are passionate about bringing you the finest organic products directly from the farm to your table. Our mission is to promote a healthier lifestyle by offering a wide range of fresh, organic, and sustainably sourced products.</p>
      <p>Our online store offers an extensive selection of organic fruits, vegetables, grains, dairy, and more. We partner with local farmers who share our commitment to quality and sustainability, ensuring that every product you purchase is grown and harvested with care.</p>
      <p>We believe that eating organic should be accessible and convenient for everyone. That's why we strive to make your shopping experience easy and enjoyable, with a user-friendly website, secure payment options, and reliable delivery services.</p>
      <p>Our dedicated team is always here to assist you with any questions or concerns. We value your trust and aim to exceed your expectations with every purchase.</p>
      <p>Thank you for choosing Vuna Tule. Together, let's embrace a healthier and more sustainable way of living!</p>

      <div>
        <h2>Location</h2>
        <p>Vuna Tule is located in the heart of Nairobi County, Kenya.</p>
        <p>Our address:</p>
        <address>
          3124 - 03000<br />
          CBD, Kenyatta Road<br />
          Nairobi
        </address>

        <h2>Headquarters</h2>
        <p>Our headquarters is centrally located in the bustling streets of Karen.</p>
        <p>Visit us at:</p>
        <address>
          The Hub Karen<br />
          Second Floor, Stall 20<br />
          Karen
        </address>
      </div>
    </div>
  );
}

export default AboutUs;
