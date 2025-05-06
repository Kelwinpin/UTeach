import Link from "next/link";

export default function Card({
  label,
  labelColor,
  title,
  description,
  href,
}) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition hover:shadow-xl h-60 w-56 flex flex-col items-center gap-2">
        <article
          itemScope
          itemType="https://schema.org/Course"
        >
          <span
              className={`inline-block px-2 py-1 text-xs font-semibold rounded-md mb-2 ${labelColor}`}
          >
              {label}
          </span>

          <h2 className="text-md font-semibold text-gray-900 mb-2" itemProp="name">
              {title}
          </h2>

          <p className="text-xs text-gray-600 mb-4" itemProp="description">
              {description}
          </p>
        </article>
        <Link
            href={href}
            className="inline-block border-2 border-blue-500 text-blue-600 px-9 py-2 text-sm font-semibold rounded-lg hover:bg-blue-50 transition absolute bottom-4"
        >
         Take Lesson
        </Link>
    </div>
  );
}
