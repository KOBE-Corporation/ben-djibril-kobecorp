import { motion } from 'framer-motion'

function ProjectCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-secondary-900 rounded-2xl sm:rounded-3xl shadow-lg border border-secondary-100 dark:border-secondary-800 overflow-hidden h-full flex flex-col xl:flex-row xl:min-h-[300px]"
    >
      <div className="relative h-52 sm:h-56 xl:h-auto xl:w-[min(36%,340px)] xl:shrink-0 bg-gradient-to-br from-secondary-200 to-secondary-300 dark:from-secondary-700 dark:to-secondary-800 animate-pulse">
        <div className="absolute top-4 right-4 w-20 h-8 bg-secondary-300 dark:bg-secondary-600 rounded-xl animate-pulse" />
      </div>

      <div className="p-4 sm:p-5 xl:p-6 flex-1 flex flex-col min-w-0">
        <div className="mb-4 xl:mb-5">
          <div className="h-7 bg-secondary-200 dark:bg-secondary-700 rounded-lg mb-3 w-3/4 animate-pulse" />
          <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-full animate-pulse" />
          <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-2/3 mt-2 animate-pulse" />
        </div>

        <div className="mb-4 xl:mb-5 p-4 rounded-xl bg-secondary-100 dark:bg-secondary-800/50 border border-secondary-200 dark:border-secondary-700">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary-200 dark:bg-secondary-700 animate-pulse" />
            <div className="flex-1">
              <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-1/2 mb-2 animate-pulse" />
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-full animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-5 flex-1 xl:grid xl:grid-cols-3 xl:gap-3 xl:space-y-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-3.5 rounded-xl bg-secondary-100 dark:bg-secondary-800/30 border border-secondary-200 dark:border-secondary-700">
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-1/4 mb-2 animate-pulse" />
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-full animate-pulse" />
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-3/4 mt-1 animate-pulse" />
            </div>
          ))}
        </div>

        <div className="mb-5">
          <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-1/4 mb-2.5 animate-pulse" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-7 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-16 animate-pulse"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col xs:flex-row gap-2.5 mt-auto pt-5 border-t border-secondary-100 dark:border-secondary-800">
          <div className="h-10 bg-secondary-200 dark:bg-secondary-700 rounded-lg flex-1 animate-pulse" />
          <div className="h-10 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-20 animate-pulse" />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCardSkeleton
