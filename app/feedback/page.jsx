"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useRef, useState } from "react";

const Page = () => {
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const message = messageRef.current.value;
    setLoading(true);
    setSuccess(null);

    if (!email || !message) {
      setLoading(false);
      setSuccess("Please fill in all fields");
      setTimeout(() => setSuccess(null), 3000);
      return;
    }

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Review submitted successfully!");
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        setSuccess("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      setSuccess("Something went wrong. Try again.");
    } finally {
      setLoading(false);
      // Reset success message after a timeout (3 seconds)
      setTimeout(() => setSuccess(null), 3000);
    }
  };



  return (
    <div className="h-[100vh]">
      <div className="pt-20">
        <Card styles={"mx-4 px-3 py-2"}>
          <form onSubmit={handleSubmit}>
            <div className="coolinput">
              <label htmlFor="email" className="text">
                Email:
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Write here..."
                className="input border-white border w-[300px]"
                required
              />
            </div>

            <textarea
              ref={messageRef}
              name="message"
              className="input mt-2 h-[150px] w-[300px] px-1"
              placeholder="Write a message"
              required
            ></textarea>

            <Button
              styles={"mt-10 rounded w-[150px] ml-[80px]"}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
          {success && <p className="text-white text-center mt-2">{success}</p>}
        </Card>
      </div>
    </div>
  );
};

export default Page;
