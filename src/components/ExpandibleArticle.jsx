
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'



export default function ExpandableArticle({ linkText, articleTitle, articleDate, articleContent, hyperlinkText }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showFullContent, setShowFullContent] = useState(false)

  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ')
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    }
    return content
  }

  return (
    <div className="font-sans">
      <>
        {linkText}{' '}
        <button
          onClick={() => setIsExpanded(true)}
          className="text-blue-600 hover:text-blue-800 underline underline-offset-4 font-medium"
        >
          {hyperlinkText}
        </button>
      </>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-white rounded-lg overflow-hidden"
          >
            <div className="py-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{articleTitle}</h2>
                  <p className="text-sm text-gray-500">{articleDate}</p>
                </div>
                <button
                  onClick={() => {
                    setIsExpanded(false)
                    setShowFullContent(false)
                  }}
                  className="px-3 py-1 bg-[#0a3c93] text-white text-sm rounded-md hover:bg-[#082d6f] transition-colors duration-200"
                >
                  Read it later
                </button>
              </div>
              <div className="prose prose-sm max-w-none text-gray-600">
                <div
                  dangerouslySetInnerHTML={{
                    __html: (showFullContent ? articleContent : truncateContent(articleContent, 50))
                      .replace(
                        /\n\n(Losing Barakah|Finding Light in the Qur'an|A New Perspective|A Message for Others|Closing Thoughts)\n/g,
                        '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>'
                      )
                      .replace(
                        /\n\n"(.+?)"\n/g,
                        '<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">$1</blockquote>'
                      )
                      .split('\n\n')
                      .map((paragraph, index) => `<p key="${index}" class="mb-4">${paragraph}</p>`)
                      .join(''),
                  }}
                />
                {!showFullContent && (
                  <button
                    onClick={() => setShowFullContent(true)}
                    className="text-blue-600 hover:text-blue-800 underline underline-offset-4 font-medium"
                  >
                    read more...
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}