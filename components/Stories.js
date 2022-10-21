import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  // By using this Hook, you tell React that your component needs to do something after render.
  // As we are not passing anything in [], useEffect will render without any arguments i.e it will render at the first basis without no condition.
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border border-theme-light rounded-lg overflow-x-scroll scrollbar-thin scrollbar-red-900">
      <div className="relative">
        {session && (
          <Story img={session.user.image} username={session.user.username} />
        )}
      </div>

      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.userId}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
}

export default Stories;
