
const videoCardConfig = (config) => {
  switch (config){
    case 'small':
        return {
          id:'small',
          div1:'mt-4',
          div2:"flex h-[120px]",
          div3:'w-[150px]',
          img:"rounded-2xl h-[100%] w-[150px] object-cover max-w-none",
          div4:"flex flex-col ml-5",
          h1:'font-medium text-base',
          p1:'text-xs text-gray-600 mt-1',
          div5:"flex gap-2 mt-1",
          p2:'text-xs text-gray-600',
          p3:'text-xs text-gray-600'
          };
      
      case 'big':
        return {
          id:'small',
          div1:'mt-4',
          div2:"flex h-[200px]",
          div3:'w-[300px]',
          img:"rounded-2xl h-[170px] w-[300px] object-cover",
          div4:"flex flex-col ml-4 mt-2",
          h1:'font-medium text-base',
          p1:'text-sm text-left text-gray-600 mt-1',
          div5:"flex gap-2 mt-1",
          p2:'text-sm text-gray-600',
          p3:'text-sm text-gray-600'
        }
  }
}

export default videoCardConfig