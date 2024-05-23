export default function Ex8() {
    return (
      <div className="p-4">
        <div className="mb-8">
          <h2 className="mb-2"> Các phần tử nằm bên trái</h2>
          <div className="flex space-x-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-2"> Các phần tử nằm bên phải</h2>
          <div className="flex justify-end space-x-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-2"> Các phần tử nằm ở giữa</h2>
          <div className="flex justify-center space-x-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-2"> Các phần tử giãn ra hai bên</h2>
          <div className="flex justify-between">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-2"> Các phần tử giãn đều 2 bên</h2>
          <div className="flex justify-around">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-2"> Các phần tử giữa đều</h2>
          <div className="flex justify-evenly">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">
                {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }