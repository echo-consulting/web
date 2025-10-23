import { Link } from 'react-router';
import { Container, Title, Stack } from '@mantine/core';
import { projectData } from '../components/projectsSection';
import { ArrowRight, Eye } from 'lucide-react';
import { useState } from 'react';

export function meta() {
  return [
    { title: 'Prosjekter - echo Consulting' },
    {
      name: 'description',
      content: 'Eksempler på våre prosjekter.',
    },
  ];
}

export default function ProjectOverview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 text-white">
        <Stack gap="xl">
          <Title className="text-5xl font-bold text-center">Prosjekter</Title>
          <div className="flex flex-col items-center mt-8">
            {projectData.map((project, index) => {
              return (
                <div
                  key={index}
                  className="p-4 max-w-xl w-full rounded-lg overflow-hidden transition-all duration-300 text-center mx-auto"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="mb-1 mx-auto h-52 rounded-t-xl relative group"
                    style={{
                      background: `url(${project.large_img}) no-repeat center center `,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#011627] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-all duration-300"
                      >
                        <Eye className="h-10 w-10 text-[#ADB7BE] hover:text-white  transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                  <Link
                    to={`${project.slug}`}
                    className="bg-[#011627] rounded-b-xl py-6 px-6 text-center block"
                    style={{ textDecoration: 'none' }}
                  >
                    <div>
                      {' '}
                      <h3 className="font-bold text-white tracking-widest mb-2">{project.title}</h3>
                      <p className="text-[#CFCDCD] tracking-wider">{project.desc}</p>
                      <div className="flex justify-center items-center font-medium tracking-wider mt-4 text-white transition-colors duration-300 relative">
                        <span className="relative">
                          <span
                            className={`transition-colors duration-300 ${
                              hoveredCard === index ? 'text-blue-400' : 'text-white'
                            }`}
                          >
                            Les mer her
                          </span>
                          <span
                            className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-400 transition-all duration-300 ${
                              hoveredCard === index ? 'w-full' : 'w-0'
                            }`}
                          />
                        </span>

                        <span
                          className="inline-flex transition-transform duration-300"
                          style={{
                            transform: hoveredCard === index ? 'translateX(6px)' : 'translateX(0)',
                          }}
                        >
                          <ArrowRight
                            size={20}
                            className={hoveredCard === index ? 'text-blue-400' : 'text-white'}
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </Stack>
      </Container>
    </div>
  );
}
