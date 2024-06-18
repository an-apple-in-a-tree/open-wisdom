"use server";
import { createClient } from "../../../utils/supabase/server";

export async function getServerSideProps() {
const supabase = createClient();
  const { data: lessons, error } = await (await supabase)
    .from('lessons')
    .select('id, title, content, image');

  if (error) {
    console.error(error);
    return { props: { lessons: [] } };
  }

  return { props: { lessons } };
}
