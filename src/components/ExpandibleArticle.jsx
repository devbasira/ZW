
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
    <div className="">
      <div className='flex'>
        {/* <div className='text-[18px] lg:text-[24px]'>
        The answers I found were calls to action. They needed to be reflected in the way I lived. And so, in 2019, I made the decision to dissociate myself from the world of cinema and
        </div> */}
        {linkText}{' '}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#0A3C93] hover:text-blue-800 font-medium"
        >
          {hyperlinkText}
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-[40px] py-[40px] mt-[20px] bg-white  overflow-hidden"
          >
            <div className="">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-[24px] font-bold text-gray-800 mb-1">{articleTitle}</h2>
                  <p className="text-[16px] text-gray-500">{articleDate}</p>
                </div>
                {/* <button
                  onClick={() => {
                    setIsExpanded(false)
                    setShowFullContent(false)
                  }}
                  className="px-3 py-1 bg-[#0a3c93] text-white text-sm rounded-md hover:bg-[#082d6f] transition-colors duration-200"
                >
                  Read it later
                </button> */}
              </div>
              <div className="prose text-[21px] prose-sm max-w-none text-gray-600">
                <div
                  dangerouslySetInnerHTML={{
                    __html: (showFullContent ? articleContent : truncateContent(articleContent, 50))
                      .replace(
                        /\n\n(Losing Barakah|Finding Light in the Qur'an|A New Perspective|A Message for Others|Closing Thoughts)\n/g,
                        '<h3 class="text-[21px] font-semibold mt-6 mb-3">$1</h3>'
                      )
                      .replace(
                        /\n\n"(.+?)"\n/g,
                        '<div className="flex"><img className = "h-[20px] w-auto" src={hamza} alt="" /><blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">$1</blockquote></div>'
                      )
                      .split('\n\n')
                      .map((paragraph, index) => `<p key="${index}" class="mb-4">${paragraph}</p>`)
                      .join(''),
                  }}
                />
                <div className='flex items-center text-[17px] gap-[20px]'>
                {!showFullContent && (
                  
                  <button
                    onClick={() => setShowFullContent(true)}
                    className="text-[#0A3C93] text-[18px] hover:text-blue-800  font-medium"
                  >
                    read more...
                  </button>
                 
                )}
                 <button
                  onClick={() => {
                    setIsExpanded(false)
                    setShowFullContent(false)
                  }}
                  className="px-[20px] font-[450] pb-[2px] bg-[#0a3c93] text-white text-[18px] rounded-full hover:bg-[#FBB00A] transition-colors duration-200"
                >
                  read later
                </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}