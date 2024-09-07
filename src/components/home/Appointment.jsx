"use client";
import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  InputAdornment,
} from "@mui/material";
import {
  AccountCircle,
  Email,
  Phone,
  Event,
  AccessTime,
  Notes,
} from "@mui/icons-material";

const availableSlots = [
  { id: 1, time: "09:00 AM" },
  { id: 2, time: "10:00 AM" },
  { id: 3, time: "11:00 AM" },
  { id: 4, time: "12:00 PM" },
  { id: 5, time: "01:00 PM" },
  { id: 6, time: "02:00 PM" },
];

const reasons = [
  { id: 1, reason: "General Checkup" },
  { id: 2, reason: "Consultation" },
  { id: 3, reason: "Follow-up" },
  { id: 4, reason: "Emergency" },
];

const Apponitment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تضيف كود عشان ترسل البيانات للسيرفر أو تتعامل معاها
    console.log("Form Data:", formData);
  };

  return (
    <section className="p-[24px] md:p-[70px] bg-[#f9f9f9]">
      <Typography variant="h4" align="center" gutterBottom>
        Book an Appointment
      </Typography>
      <div className="w-[70px] h-[2px] bg-[#3C3D37] mx-auto mb-[12px] md:mb-[20px] " />
      <Typography sx={{ color: "GrayText", textAlign: "center", mb: 5 }}>
        Fill out the form below and we will contact you during our working
        hours.
      </Typography>

      <form onSubmit={handleSubmit} className=" max-w-[1000px] mx-auto">
        <Grid container spacing={3} justifyContent="center">
          {/* Full Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Phone Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Reason for Visit */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Reason for Your Visit"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              {reasons.map((option) => (
                <MenuItem key={option.id} value={option.reason}>
                  {option.reason}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Appointment Date */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Appointment Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>

          {/* Available Time Slots */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Select Time Slot"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              {availableSlots.map((slot) => (
                <MenuItem key={slot.id} value={slot.time}>
                  {slot.time}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Note Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              multiline
              rows={4}
              placeholder="Additional information or requests"
            />
          </Grid>

          {/* Submit Button */}
          <Grid textAlign={"center"} item xs={12}>
            <div>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2B2B2B" }}
                type="submit"
              >
                Book
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

const styles = {
  section: {
    padding: {
      md: "70px",
      xs: "50px 20px",
    },
    backgroundColor: "#f9f9f9",
  },
  paper: {
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    height: "100%",
  },
};

export default Apponitment;
