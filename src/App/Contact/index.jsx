import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button, Stack } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        // check if the input is empty
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };
    try {
      await axios.post(
        "https://property-system-node.onrender.com/contact",
        data
      );
      this.setState({ sent: true });
      this.resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Stack
        sx={{
          minHeight: "100vh",
          width: "100%",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <form
          className="contact-form"
          onSubmit={(e) => this.formSubmit(e)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            placeholder="Enter your name"
            label="Name"
            variant="outlined"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            required
            type="text"
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Email"
            placeholder="Enter email address"
            variant="outlined"
            value={this.state.email}
            onChange={(e) => this.handleChangeEmail(e)}
            error={this.state.emailError}
            required
            type="email"
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            placeholder="Enter Subject"
            label="Subject"
            variant="outlined"
            value={this.state.subject}
            onChange={(e) => this.setState({ subject: e.target.value })}
            required
          />
          <br />
          <br />
          <br />
          <TextField
            id="standard-multiline-flexible"
            label="Message"
            placeholder="Enter Message"
            variant="outlined"
            multiline
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
            required
            type="text"
          />
          <br />
          <br />
          <br />
          <Stack
            sx={{
              margin: "0 auto",
              display: "flex",
              width: "100px",
              backgroundColor: "#064635",
            }}
          >
            <div className="button--container">
              <Button type="submit" className="button button-primary">
                {this.state.buttonText}
              </Button>
            </div>
          </Stack>
        </form>
        <Footer />
      </Stack>
    );
  }
}
