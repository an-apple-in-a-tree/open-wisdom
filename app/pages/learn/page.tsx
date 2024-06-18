import { createClient } from "../../../utils/supabase/server";
const supabase = createClient();

interface Lesson {
  id: number;
  title: string;
  content: string;
  image: string;
}

const fetchLessons = async (): Promise<Lesson[]> => {
  const { data: lessons, error } = await (await supabase)
    .from("lessons")
    .select('id, title, content, images');

  if (error) {
    console.error(error);
    return [];
  }else{
    console.error("Success");
  }
  return lessons;
};

export default async function Page (){
  console.error("start");
  const lessons = await fetchLessons();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Learn</h1>
      <div className="flex flex-wrap gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white border rounded-lg shadow-lg overflow-hidden w-full">
            {lesson.image && <img src={lesson.image} alt={lesson.title} className="w-full h-48 object-cover" />}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{lesson.title}</h2>
              <p className="text-gray-700 mt-2">{lesson.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


