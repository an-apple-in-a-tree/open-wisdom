"use client";
import React, { useState } from "react";
import "../../globals.css"
import * as Form from "@radix-ui/react-form";
import { createLessons } from "./createLesson";

export default function Page() {

const [lessonTitle, setLessonTitle] = useState("");
const [lessonContent, setLessonContent] = useState("");
const [lessonMedia, setLessonMedia] = useState<File[]>([]);
const [lessonVideos, setLessonVideos] = useState<File[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createLessons(lessonTitle, lessonContent, lessonMedia, lessonVideos);
    console.log("submitted");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Form.Root className="w-2/3 bg-darkGold p-8" onSubmit={handleSubmit}>
        <h1 className="nunito text-xl pb-4 text-white">
          Upload your own lesson:{" "}
        </h1>
        <Form.Field className="grid mb-6" name="lessonTitle">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-m font-medium leading-[35px] text-white">
              Lesson Title
            </Form.Label>
            <Form.Message
              className="text-m text-navy opacity-[0.8]"
              match="valueMissing"
            >
              Please enter a lesson title
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-navy shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="lessonContent">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-m font-medium leading-[35px] text-white">
              Lesson Content
            </Form.Label>
            <Form.Message
              className="text-[13px] text-navy opacity-[0.8]"
              match="valueMissing"
            >
              Please enter the lesson content
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-navy shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
              required
              value={lessonContent}
              onChange={(e) => setLessonContent(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="lessonMedia">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-m font-medium leading-[35px] text-white">
              Images
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              className=""
              type="file"
              multiple
              onChange={(e) =>
                setLessonMedia(e.target.files ? Array.from(e.target.files) : [])
              }
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="lessonVideos">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-m font-medium leading-[35px] text-white">
              Videos
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              className=""
              type="file"
              multiple
              onChange={(e) =>
                setLessonVideos(
                  e.target.files ? Array.from(e.target.files) : []
                )
              }
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Post Lesson
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
