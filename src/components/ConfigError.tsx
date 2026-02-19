import React from 'react';

interface ConfigErrorProps {
    missingKeys: string[];
}

const ConfigError: React.FC<ConfigErrorProps> = ({ missingKeys }) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
            <div className="max-w-2xl w-full bg-[#141414] border border-red-600 rounded-lg p-8 shadow-2xl">
                <h1 className="text-4xl font-bold text-red-600 mb-6">Configuration Required</h1>

                <p className="text-xl mb-8">
                    The application cannot start because some configuration keys are missing.
                </p>

                <div className="bg-red-900/20 border border-red-600/50 rounded p-4 mb-8 text-left">
                    <p className="font-semibold text-red-400 mb-2">Missing Environment Variables:</p>
                    <ul className="list-disc list-inside space-y-1 font-mono text-sm text-red-300">
                        {missingKeys.map((key) => (
                            <li key={key}>{key}</li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6 text-left">
                    <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">How to Fix (Vercel)</h2>

                    <ol className="list-decimal list-inside space-y-4 text-gray-300">
                        <li>Go to your <strong>Vercel Project Dashboard</strong>.</li>
                        <li>Navigate to <strong>Settings</strong> &gt; <strong>Environment Variables</strong>.</li>
                        <li>Add the missing keys listed above. You can find these values in your <strong>Firebase Console</strong> (Project Settings).</li>
                        <li>
                            <span className="text-white font-bold">IMPORTANT:</span> After adding the variables, you must
                            <span className="text-red-500 font-bold"> Redeploy</span> your application for changes to take effect.
                        </li>
                    </ol>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-500">
                        If you are running this locally, please check your <code className="text-gray-400">.env</code> file.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConfigError;
