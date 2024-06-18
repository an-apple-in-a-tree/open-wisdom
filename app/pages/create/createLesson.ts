"use server";
import { createClient } from "../../../utils/supabase/server";
const supabase = createClient();

export const createLessons = async (
  lessonTitle: string,
  lessonContent: string,
  lessonMedia: File[] = [],
  lessonVideos: File[] = []
) => {
  console.log("hello");
  const { data, error } = await (
    await supabase
  )
    .from("lessons")
    .insert({
      title: lessonTitle,
      content: lessonContent,
      media: lessonMedia.length > 0 ? lessonMedia : null,
      videos: lessonVideos.length > 0 ? lessonVideos : null,
    })
    .select();

  if (error) {
    console.error("Error creating lesson:", error);
  } else {
    console.log("Lesson created successfully:", data);
  }
};
