import React from 'react';

export function Button({ onClick, onEdit, onResubmit, isSubmitted, submittedData }) {
    return (
        <div className="space-y-4">
            <button
                onClick={onClick}
                className={`bg-white text-black flex justify-center items-center py-[16px] px-[32px] hover:pointer hover:bg-[#242529] hover:text-white rounded-[50px]`}
            >
                {isSubmitted ? (
                    <div>
                        <div>Thanks for your interest</div>
                        {submittedData && (
                            <div className="mt-2 text-xs text-zinc-400">
                                <div>Name: {submittedData.name}</div>
                                <div>Email: {submittedData.email}</div>
                                <div>Message: {submittedData.message.substring(0, 50)}...</div>
                            </div>
                        )}
                    </div>
                ) : (
                    "Get in Touch"
                )}
            </button>
            {/* {isSubmitted && (
        <div className="flex justify-between text-xs mt-2">
          <button onClick={onEdit} className="px-3 py-1 text-blue-400 hover:text-blue-300 transition-colors">
            Edit info
          </button>
          <button onClick={onResubmit} className="px-3 py-1 text-green-400 hover:text-green-300 transition-colors">
            Resubmit
          </button>
        </div>
      )} */}
        </div>
    );
}
