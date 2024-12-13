import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";
export default async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center mb-4 text-accent-400">
        Reserve {cabin.name} today. Pay on arrival.
      </h2>
      <div className="grid grid-cols-[3fr,2fr] border border-primary-800 min-h-[400px]">
        <DateSelector
          settings={settings}
          cabin={cabin}
          bookedDates={bookedDates}
        />
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}
