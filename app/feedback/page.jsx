"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const page = () => {
  return (
    <div className="h-[100vh] ">
      <div className="pt-20">
        <Card styles={"mx-4 px-3 py-2"}>
          <div className="coolinput">
            <label htmlFor="input" className="text">
              Email:
            </label>
            <input
              type="email"
              placeholder="Write here..."
              name="input"
              className="input border-white border w-[300px]"
            />
          </div>

          <textarea
            type="text"
            name="text"
            className="input mt-2 h-[150px] px-1"
            placeholder="Write a message"
          ></textarea>


          <Button styles={'mt-10 rounded w-[150px] ml-[80px]'}>Submit</Button>
        </Card>
      </div>
    </div>
  );
};

export default page;
