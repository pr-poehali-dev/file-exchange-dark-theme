import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const handleDownload = () => {
    // Placeholder for download functionality
    console.log('Downloading Yandex.exe...');
  };

  return (
    <div className="min-h-screen bg-[#1a1b26] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7aa2f7]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#9ece6a]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#f7768e]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full max-w-md relative z-10">


        {/* Download Card */}
        <Card className="relative bg-[#24283b]/70 backdrop-blur-xl border border-[#414868]/50 p-6 animate-fade-in shadow-2xl">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none"></div>
          <div className="relative z-10">
          {/* File Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-[#1a1b26] rounded-lg flex items-center justify-center">
              <Icon name="FileText" size={32} className="text-[#7aa2f7]" />
            </div>
          </div>

          {/* File Info */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Yandex.exe</h2>
            <p className="text-gray-400 text-sm mb-4">File size: 1.3 MB</p>
            
            {/* Antivirus Status */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Shield" size={20} className="text-[#9ece6a]" />
              <span className="text-[#9ece6a] font-medium">0/13 detections</span>
            </div>
            
            <Badge variant="secondary" className="bg-[#9ece6a]/10 text-[#9ece6a] border-[#9ece6a]/20">
              File is safe
            </Badge>
            <p className="text-gray-400 text-xs mt-2">Verified by partner</p>
          </div>

          {/* Download Button */}
          <Button
            onClick={handleDownload}
            className="w-full bg-[#7aa2f7] hover:bg-[#7aa2f7]/90 text-white font-medium py-3 h-auto transition-all duration-200"
            size="lg"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Download File
          </Button>

          {/* Additional Info */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">File type:</span>
              <span className="text-white">Executable</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Last scan:</span>
              <span className="text-white">Today</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Uploaded:</span>
              <span className="text-white">3 days ago</span>
            </div>
          </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Lock" size={16} className="text-gray-500" />
              <span className="text-xs text-gray-500">SSL Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-gray-500" />
              <span className="text-xs text-gray-500">Fast Download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;