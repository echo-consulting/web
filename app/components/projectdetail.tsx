type ProjectDetailProps = {
  title: string;
  desc: string;
  image: string;
};

export default function ProjectDetail({
  title,
  desc,
  image,
}: ProjectDetailProps) {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img src={image} alt={title} className="w-full max-w-xl mb-4 rounded" />
      <p className="text-lg">{desc}</p>
    </div>
  );
}
