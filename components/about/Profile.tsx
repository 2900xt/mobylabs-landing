"use client";
import Image from "next/image";

export function Profile(props : { name: string; role: string; bio: string; imgSrc: string; skills: string[]; website: string }) {

  return (
  <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer" onClick={() => window.location.href = props.website}>
    <div className="flex flex-col items-center text-center">
      <Image src={props.imgSrc} alt={props.name} width={128} height={128} className="w-32 h-32 rounded-full mb-6 shadow-lg" />
      <h3 className="text-2xl font-bold text-white mb-2">{props.name}</h3>
      <p className="text-cyan-300 font-semibold mb-4">{props.role}</p>
      <p className="text-white/80 leading-relaxed">
        {props.bio}
      </p>
      <div className="mt-6 flex gap-4">
        {props.skills.map((skill, index) => (
          <div key={index} className="px-4 py-2 bg-cyan-500/30 rounded-lg text-sm text-white">{skill}</div>
        ))}
      </div>
    </div>
  </div>
  );
}