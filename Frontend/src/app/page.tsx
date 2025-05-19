"use client";
import CourseCard from "@/Components/CourseCard";

export default function Home() {
  return (
    <div className="h-full w-full sm:pt-6 sm:overflow-auto pb-20 sm:pb-6">
      <div className="w-[90%] mx-auto sm:mx-0 sm:w-[80%] sm:pl-6">
        <div className="flex flex-col gap-4 ">
          <CourseCard
            image="/example.jpg"
            title="Kemampuan Merangkum Tulisan"
            description="Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus. Lorem Ipsum Dolor Sit Amet Consectetur."
            language="Bahasa Sunda"
            author="Al-Baiqi Samaan"
          />
          <CourseCard
            image="/example.jpg"
            title="Kemampuan Merangkum Tulisan"
            description="Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus. Lorem Ipsum Dolor Sit Amet Consectetur."
            language="Bahasa Sunda"
            author="Al-Baiqi Samaan"
          />
          <CourseCard
            image="/example.jpg"
            title="Kemampuan Merangkum Tulisan"
            description="Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus. Lorem Ipsum Dolor Sit Amet Consectetur."
            language="Bahasa Sunda"
            author="Al-Baiqi Samaan"
          />
          <CourseCard
            image="/example.jpg"
            title="Kemampuan Merangkum Tulisan"
            description="Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus. Lorem Ipsum Dolor Sit Amet Consectetur."
            language="Bahasa Sunda"
            author="Al-Baiqi Samaan"
          />
          <CourseCard
            image="/example.jpg"
            title="Kemampuan Merangkum Tulisan"
            description="Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus. Lorem Ipsum Dolor Sit Amet Consectetur."
            language="Bahasa Sunda"
            author="Al-Baiqi Samaan"
          />
        </div>
      </div>
    </div>
  );
}