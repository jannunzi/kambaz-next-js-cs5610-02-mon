export default function TailwindResponsive() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">Tailwind Responsive</h1>
      <h2 className="text-xl font-bold text-white sm:text-red-500 md:text-green-500 lg:text-blue-500 xl:text-yellow-500 2xl:text-purple-500">Responsive Breakpoints</h2>
      <h2 className="text-xl font-bold">Hide/Show</h2>
      <div className="flex">
        <div className="bg-red-500 w-[200px] hidden md:block">Kambaz Navigation Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
        <div className="bg-green-500 w-[200px] hidden sm:block">
          Course Navigation Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
        <div className="bg-blue-500  flex-grow">
          <select className="block md:hidden">
            <option value="1">Account</option>
            <option value="2">Dashboard</option>
            <option value="3">Courses</option>
            <option value="4">Inbox</option>
            <option value="5">Notifications</option>
            <option value="6">Settings</option>
            <option value="7">Logout</option>
          </select>

          <select className="block sm:hidden">
            <option value="1">Home</option>
            <option value="2">Modules</option>
            <option value="3">Assignments</option>
            <option value="4">Grades</option>
            <option value="5">Announcements</option>
            <option value="6">Calendar</option>
            <option value="7">Files</option>
          </select>


          Modules Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
        <div className="bg-yellow-500 w-[200px] hidden lg:block">Status Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      </div>
    </div>
  );
}