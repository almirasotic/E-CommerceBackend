const express = require("express");
const router = new express.Router();
const products = require("../models/productsSchema");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenicate = require("../middleware/authenticate");
const { sendConfirmationEmail } = require("../mailer/mailer");

// router.get("/",(req,res)=>{
//     res.send("this is testing routes");
// });

// get the products data

const secret = "testJWTtoken";

router.get("/getproducts", async (req, res) => {
  try {
    const producstdata = await products.find();
    console.log(producstdata + "data mila hain");
    res.status(201).json(producstdata);
  } catch (error) {
    console.log("error" + erroir.message);
  }
});

// register the data
router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "filll the all details" });
    console.log("bhai nathi present badhi details");
  }

  try {
    const preuser = await User.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password are not matching" });
    } else {
      const finaluser = new User({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      const token = jwt.sign({ email, password, fname }, secret, {
        expiresIn: "2h",
      });
      // yaha pe hasing krenge

      const storedata = await finaluser.save();
      // console.log(storedata + "user successfully added");

      await sendConfirmationEmail({ toUser: email, hash: token, name: fname });

      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log(
      "error the bhai catch ma for registratoin time" + error.message
    );
    res.status(422).send(error);
  }
});

// login data
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill the details" });
  }

  try {
    const userlogin = await User.findOne({ email: email });
    console.log(userlogin);
    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      console.log(isMatch);

      if (!isMatch) {
        res.status(400).json({ error: "invalid crediential pass" });
      }
      if (userlogin.confirmed != true) {
        res.status(400).json({ error: "Aktivirajte nalog" });
      } else {
        const token = await userlogin.generatAuthtoken();
        console.log(token);

        res.cookie("eccomerce", token, {
          expires: new Date(Date.now() + 2589000),
          httpOnly: true,
        });
        res.status(201).json(userlogin);
      }
    } else {
      res.status(400).json({ error: "user not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: "invalid crediential pass" });
    console.log("error the bhai catch ma for login time" + error.message);
  }
});

// getindividual

router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const individual = await products.findOne({ id: id });
    console.log(individual);

    res.status(201).json(individual);
  } catch (error) {
    res.status(400).json(error);
  }
});

// adding the data into cart
// router.post("/addcart/:id", authenicate, async (req, res) => {
router.post("/addcart/:id", authenicate, async (req, res) => {
  console.log("========addcart========");
  try {
    // console.log("perfect 6")
    const { id } = req.params;
    const cart = await products.findOne({ id: id });
    // console.log(cart + "cart milta hain");

    if (cart) {
      const Usercontact = await User.findOne({ _id: req.userID });
      console.log(req.userID + "  user milta hain");

      if (Usercontact) {
        console.log("uso u if");
        const cartData = await Usercontact.addcartdata(cart);
        console.log("saving to cart");
        await Usercontact.save();
        //   console.log(cartData + " thse save wait kr");
        //   console.log(Usercontact + "userjode save");
        // console.log("pisa ga");
        console.log("treba da vrati 201");
        res.status(201).json(Usercontact);
      } else {
        return res.status(400).json({ msg: "nece ensto" });
      }
    } else {
      console.log("returning 401");
      return res.status(400).json({ msg: "nece ensto" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "error" });
  }
});

// get data into the cart
// router.get("/cartdetails", authenicate, async (req, res) => {
router.get("/cartdetails", authenicate, async (req, res) => {
  try {
    const buyuser = await User.findOne({ _id: req.userID });
    if (buyuser) {
      // console.log(buyuser + "user hain buy pr");
      return res.status(201).json(buyuser);
    } else return res.status(400).json("NEMA NISta");
  } catch (error) {
    console.log(error + "error for buy now");
  }
});

// get user is login or not
router.get("/validuser", authenicate, async (req, res) => {
  try {
    const validuserone = await User.findOne({ _id: req.userID });
    console.log(validuserone + "user hain home k header main pr");
    res.status(201).json(validuserone);
  } catch (error) {
    console.log(error + "error for valid user");
  }
});

// for userlogout

router.get("/logout", authenicate, async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
      return curelem.token !== req.token;
    });

    res.clearCookie("eccomerce", { path: "/" });
    req.rootUser.save();
    // res.json("test korpa")
    res.status(201).json(req.rootUser.tokens);
    console.log("user logout");
  } catch (error) {
    console.log(error + "jwt provide then logout");
  }
});

// item remove ho rhi hain lekin api delete use krna batter hoga
// remove iteam from the cart

// router.delete("/remove/:id", authenicate, async (req, res) => {
//   console.log("test", req);
//   try {
//     const { id } = req.params;
//     const individual = await products.findOne({ id: id });

//     await products.deleteOne({ _id: id });
//     // req.rootUser.carts = req.rootUser.carts.filter((curel) => {
//     //   return curel.id != id;
//     // });

//     // req.rootUser.save();
//     res.status(201).json(req.rootUser);
//     console.log("iteam remove");
//   } catch (error) {
//     console.log(error + "jwt provide then remove");
//     res.status(400).json(error);
//   }
//   // res.json("test korpa")
// });
router.delete("/remove/:id", authenicate, async (req, res) => {
  console.log("Ovde smo");
  try {
    const { id } = req.params;
    req.rootUser.carts = req.rootUser.carts.filter((curel) => {
      curel.id != id;
    });

    req.rootUser.save();
    console.log("iteam remove");
    return res.status(200).json(req.rootUser);
  } catch (error) {
    console.log("Ukloni");
    console.log(error + "jwt provide then remove");
    return res.status(400).json(error);
  }
});

const activateAccount = async (req, res) => {
  var token = req.query.token;
  console.log(token);
  try {
    if (token) {
      jwt.verify(token, secret, async function (error, decodedToken) {
        if (error) return res.status(404).json({ message: "Link je istekao!" });

        const { email, password, fname } = decodedToken;
        let filer = { email: email };
        let update = { confirmed: true };
        let doc = await User.findOneAndUpdate(filer, update, {
          new: true,
        });
        console.log(doc);
        return res
          .status(201)
          .json({ message: "Nalog je aktiviran! Mozete se ulogovati.." });
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

router.get("/aktiviraj", activateAccount);

module.exports = router;
