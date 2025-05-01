export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Active Jobs</h3>
        <p className="text-3xl font-bold">12</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Completed Today</h3>
        <p className="text-3xl font-bold">4</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
        <p className="text-3xl font-bold">£2,450</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Parts in Stock</h3>
        <p className="text-3xl font-bold">156</p>
      </div>
    </div>
  );
}
