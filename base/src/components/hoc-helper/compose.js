const compose = (...funcs) => (comp) => {
   return funcs.reduceRight((prevVal, fn) => {
      return fn(prevVal)
   },comp)
}

export default compose