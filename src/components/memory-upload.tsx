import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function MemoryUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      toast({
        title: "Memories added!",
        description: `${files.length} photo${files.length > 1 ? 's' : ''} ready to become part of your story.`,
      });
    }
  }, [toast]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      toast({
        title: "Beautiful memories captured!",
        description: `${files.length} photo${files.length > 1 ? 's' : ''} added to your collection.`,
      });
    }
  }, [toast]);

  const removeFile = useCallback((index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-4">
            Share Your Beautiful Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload photos, videos, and memories to start building your living scrapbook together.
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-dashed border-border transition-memory hover:border-primary/40">
          <div
            className={`relative transition-memory ${isDragging ? 'scale-105 border-primary bg-primary/5' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {uploadedFiles.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-sunset rounded-full flex items-center justify-center shadow-glow">
                    <Upload className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Drop your memories here</h3>
                <p className="text-muted-foreground mb-6">
                  Drag and drop photos, or click to browse your device
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="heart" size="lg" asChild>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Image className="w-4 h-4" />
                      Choose Photos
                    </label>
                  </Button>
                  <Button variant="vintage" size="lg">
                    Connect Instagram
                  </Button>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg shadow-soft transition-memory group-hover:scale-105"
                      />
                      <button
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="text-center border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    {uploadedFiles.length} memory{uploadedFiles.length > 1 ? 'ies' : 'y'} ready to be added to your scrapbook
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="heart" size="lg">
                      Create Memory Collection
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <label htmlFor="more-files" className="cursor-pointer">
                        Add More Photos
                      </label>
                    </Button>
                  </div>
                  <input
                    id="more-files"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}