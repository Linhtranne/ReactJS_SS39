
export default function Ex10() {
    return (
      <div className="p-4 max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              placeholder="Enter username" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="mt-1 text-xs text-gray-500">Your password is between 4 and 12 characters</p>
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Input Text Label</label>
            <input 
              type="text" 
              placeholder="Typing |" 
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
          </div>
  
          <div className="mb-4">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
          </div>
  
          <fieldset className="mb-4">
            <legend className="block text-sm font-medium text-gray-700">Radio selection</legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="radio" 
                  id="radio1" 
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="radio1" className="ml-2 block text-sm text-gray-900">
                  Radio selection 1
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="radio" 
                  id="radio2" 
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="radio2" className="ml-2 block text-sm text-gray-900">
                  Radio selection 2
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="radio" 
                  id="radio3" 
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="radio3" className="ml-2 block text-sm text-gray-900">
                  Radio selection 3
                </label>
              </div>
            </div>
          </fieldset>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Dropdown Title</label>
            <select className="mt-1 block w-full py-2 px-3 border border-indigo-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Dropdown option</option>
              <option>Dropdown option 1</option>
              <option>Dropdown option 2</option>
            </select>
          </div>
  
          <div className="flex justify-between">
            <button 
              type="button" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="w-full ml-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }