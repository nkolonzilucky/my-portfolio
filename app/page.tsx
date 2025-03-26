
import Image from 'next/image';
import { PROJECTS_QUERY, USER_QUERY } from '@/sanity/lib/queries';
import { client, urlFor } from '@/sanity/lib/client';
import ContactForm from './components/ContactForm';
import Messages from './components/Messages';

async function getProjects(){
  const projects = await client.fetch(PROJECTS_QUERY);
  return projects;
}

async function getUserProfile() {
  const user = await client.fetch(USER_QUERY);
  return user;
}

export default async function Home() {
  const projects =  await getProjects();
  const profile = await getUserProfile();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white pb-12">
      {/* Hero Section */}
      <section className="w-full max-w-4xl p-8 text-center bg-gray-800 rounded-lg shadow-lg">
        <Image
          src={urlFor(profile.image).url()} 
          alt={profile.names}
          width={120}
          height={120}
          className="rounded-full mx-auto"
        />
        <h1 className="mt-4 text-2xl font-bold">{profile.names}</h1>
        <p className="text-gray-400">{profile.role}</p>
        <p className="mt-2 text-gray-300">{profile.about}</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500">
          View My Work
        </button>
      </section>

      {/* Latest Work Section */}
      <section className="w-full max-w-4xl mt-12 text-center">
        <h2 className="text-xl font-semibold">Latest Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {projects.map((item:any) => (
            <div key={item.title} className="p-4 bg-gray-800 rounded-lg shadow-md">
              {/* <div className="w-full h-32 bg-gray-700 rounded"></div> */}
              <Image className='w-full rounded-md h-70' alt='pic' width={150} height={120} src={urlFor(item.image).url()} />
              <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
              <button className="mt-2 px-4 py-1 bg-blue-600 rounded-lg hover:bg-blue-500">
                <a href={item.link} target='_blank'>
                View More
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Messages Section */}
      <Messages />
    </main>
  );
}
